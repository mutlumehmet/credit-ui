import { DataGrid } from "devextreme-react/data-grid";
import notify from "devextreme/ui/notify";
import { RawData } from "../types";
import { useLayoutEffect, useState } from "react";
import getValidatedData from "../helper/data-valdiator";

export default function MainLayout() {
  const [data, setData] = useState<RawData[]>();

  const handleDataFetch = async () => {
    try {
      const response = await import("../services/mock-reporting-dates.json");
      console.log(response.default, "response");
      setData(getValidatedData(response.default));
    } catch (err) {
      notify(err, "error", 5000);
    }
  };
  console.log(data);

  useLayoutEffect(() => {
    handleDataFetch();
  }, []);

  return <DataGrid dataSource={data} />;
}
