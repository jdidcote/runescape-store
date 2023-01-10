import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePage from "../StorePage/StorePage";
import BasketPage from "../BasketPage/BasketPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/store" element={<StorePage />}></Route>
        <Route path="/basket" element={<BasketPage />}></Route>
        <Route path="*" element={<StorePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
