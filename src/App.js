import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Thapa from "./Components/Thapa";
import { Country1 } from "./Components/Country1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Thapa />} />
        <Route path="/:name" element={<Country1 />} />
      </Routes>
    </Router>
  );
}

export default App;
