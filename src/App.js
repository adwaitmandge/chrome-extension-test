import logo from "./logo.svg";
import "./App.css";
import Verify from "./pages/Verify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App h-[500px] w-[500px]">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Verify />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
