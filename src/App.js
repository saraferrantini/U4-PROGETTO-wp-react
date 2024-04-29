// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// //css
// import "../src/components/style.css";
// import ArticleList from "./components/ArticleList";

// function App() {
//   return (
//     <>
//       <ArticleList />
//     </>
//   );
// }

// export default App;

// App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "../src/components/MyNavbar";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<ArticleList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
