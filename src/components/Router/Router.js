import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import StorePage from "../StorePage/StorePage";
import BasketPage from "../BasketPage/BasketPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />}></Route>
        <Route path="/basket" element={<BasketPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
