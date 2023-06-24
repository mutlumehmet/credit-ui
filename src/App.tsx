import { DataGrid } from "devextreme-react/data-grid";
import "./styles/credit-ui-theme/dx.material.credit-ui.css";
function App() {
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
