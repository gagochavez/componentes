import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NewVideo from "./Pages/NewVideo/NewVideo";
import NewCategory from "./Pages/NewCategory/NewCategory";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Error404 from "./Pages/Error404/Error404";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formvideo" element={<NewVideo />} />
        <Route path="/formcategory" element={<NewCategory />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
