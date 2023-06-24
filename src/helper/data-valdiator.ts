import { parseISO, parse, format, lastDayOfMonth } from "date-fns";
import { RawData } from "../types";
export default function getValidatedData(data: Array<RawData>) {
  //created a shallow copyt of the data to return at the end
  let validatedData = [...data];
  validatedData.forEach((item) => {
    let dateStr = item.nextReportingDate.trim();
    let date;

    // concerning limited time the validation will be done mainly specific regex later it can be enhanced in a more generic way

    // when the date format is yyyy-mm-dd hh:mm
    if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(dateStr)) {
      date = parseISO(dateStr);
    }

    // when the date format is yyyy-mm-dd h:mm
    else if (/^\d{4}-\d{2}-\d{2} \d{1}:\d{2}$/.test(dateStr)) {
      date = parse(dateStr, "yyyy-MM-dd H:mm", new Date());
    }

    // when the date format is yyyy-mm-d h:mm
    else if (/^\d{4}-\d{2}-\d{1} \d{1}:\d{2}$/.test(dateStr)) {
      date = parse(dateStr, "yyyy-MM-dd H:mm", new Date());
    }

    // when the date format is yyyy-mm
    else if (/^\d{4}-\d{2}$/.test(dateStr)) {
      date = parse(dateStr, "yyyy-MM", new Date());
    }

    // when date is in yyyy-mm-dd..
    else if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      date = parse(dateStr, "yyyy-MM-dd", new Date());
    }

    // when date is in yyyy-mm-dd, time-period format
    else if (/^\d{4}-\d{2}-\d{2},/.test(dateStr)) {
      let [datePart, timeOfDay] = dateStr.split(",");
      date = parse(datePart, "yyyy-MM-dd", new Date());
      switch (timeOfDay.trim()) {
        case "evening":
          date.setHours(18);
          break;
        case "post-market-close": // not present in the sample data but I added it as mantioned in the brief
          date.setHours(16);
          break;
        case "pre-noon":
          date.setHours(12);
          break;
        case "pre-market-open": // not present in the sample data but I added it as mantioned in the brief
        case "morning":
          date.setHours(8);
          break;
        default:
          date.setHours(0);
      }
    }

    // an additional condition for dd/mm/yyyy hh:mm:ss
    else if (/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/.test(dateStr)) {
      date = parse(dateStr, "dd/MM/yyyy HH:mm:ss", new Date());
    } else {
      // some primitive handling / fallback
      console.log("Date format not recognized: " + dateStr);
      date = null;
    }

    // setting the new reporting date
    if (date !== null) {
      // if the next reporting date is inferred, then it is the last day of the month
      if (item.nextReportingInferred) {
        item.nextReportingDate = format(
          lastDayOfMonth(date),
          "yyyy-MM-dd HH:mm"
        );
      } else {
        item.nextReportingDate = format(date, "yyyy-MM-dd HH:mm");
      }
    } else {
      item.nextReportingDate = "";
    }
  });
  return validatedData;
}

//
