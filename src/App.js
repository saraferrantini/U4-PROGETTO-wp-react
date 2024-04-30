import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/components/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "../src/components/MyNavbar";
import ArticleList from "./components/ArticleList";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<ArticleList />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
