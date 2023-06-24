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
