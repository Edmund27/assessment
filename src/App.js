import "./App.css";
import Content from "./components/Content/Content";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/:itemId" element={<Content />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
