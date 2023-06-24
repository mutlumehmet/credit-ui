import notify from "devextreme/ui/notify";
import { RawData } from "../types";
import { useLayoutEffect, useState } from "react";
import getValidatedData from "../helper/data-valdiator";
import DataGrid, {
  SearchPanel,
  Item as GridItem,
  Toolbar,
  Paging,
  FilterRow,
} from "devextreme-react/data-grid";
import Button from "devextreme-react/button";

import { CellPreparedEvent, Column } from "devextreme/ui/data_grid";

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

  // there is no built-in way to disable sorting on third click, here logic manually applied
  const handleThirdClickOnSort = (e: CellPreparedEvent<any, any>) => {
    if (e.rowType === "header") {
      e.cellElement.addEventListener("click", function (event) {
        if (!e.column.sortOrder) {
          e.component.columnOption(e.columnIndex, "sortOrder", "asc");
        } else if (e.column.sortOrder === "asc") {
          e.component.columnOption(e.columnIndex, "sortOrder", "desc");
        } else if (e.column.sortOrder === "desc") {
          e.component.columnOption(e.columnIndex, "sortOrder", undefined);
        }
        event.stopPropagation();
      });
    }
  };

  // here I apply filtering only on specific columns as requested
  const handleColumnSettings = (columns: Column[]) => {
    for (let i = 0; i < columns.length; i++) {
      if (
        columns[i].name === "companyName" ||
        columns[i].name === "lastReportingDate" ||
        columns[i].name === "nextReportingDate"
      ) {
        columns[i].allowFiltering = true;
      } else {
        columns[i].allowFiltering = false;
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-14 px-20">
      <DataGrid
        className="h-[80vh]"
        dataSource={data}
        keyExpr="companyName"
        showBorders={true}
        allowColumnResizing={true}
        columnResizingMode={"widget"}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        onCellPrepared={handleThirdClickOnSort}
        customizeColumns={(columns) => handleColumnSettings(columns)}
      >
        <Paging enabled={false} />
        <Toolbar>
          <GridItem location="before" locateInMenu="false">
            <Button text="Refresh" icon="refresh" onClick={handleDataFetch} />
          </GridItem>
          <GridItem location="after" locateInMenu="false" name="searchPanel" />
        </Toolbar>
        <FilterRow visible={true} />
        <SearchPanel visible={true} />
      </DataGrid>
    </div>
  );
}
