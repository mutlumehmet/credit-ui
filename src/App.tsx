import { DataGrid } from "devextreme-react/data-grid";
import "./styles/credit-ui-theme/dx.material.credit-ui.css";
import notify from "devextreme/ui/notify";
import { RawData } from "./types";
import { useLayoutEffect, useState } from "react";
function App() {
  const [data, setData] = useState<RawData[]>();

  const handleDataFetch = async () => {
    try {
      const response = await import("./services/mock-reporting-dates.json");
      console.log(response.default, "response");
      setData(response.default);
    } catch (err) {
      notify(err, "error", 5000);
    }
  };
  console.log(data);

  useLayoutEffect(() => {
    handleDataFetch();
  }, []);

  return (
    <div>
      <header className="App-header flex justify-center">
        <div className="bg-black rounded-lg p-4 text-white">header </div>
      </header>
      <div className="bg-white rounded-lg p-4 text-black flex justify-center">
        <DataGrid />
      </div>
    </div>
  );
}

export default App;
