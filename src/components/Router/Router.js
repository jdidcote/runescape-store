import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import StorePage from "../StorePage/StorePage";
import BasketPage from "../BasketPage/BasketPage";

const Router = () => {
  const [basketItems, setBasketItems] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/store"
          element={
            <StorePage
              basketItems={basketItems}
              setBasketItems={setBasketItems}
            />
          }
        ></Route>
        <Route
          path="/basket"
          element={
            <BasketPage
              basketItems={basketItems}
              setBasketItems={setBasketItems}
            />
          }
        ></Route>
        <Route
          path="*"
          element={
            <StorePage
              basketItems={basketItems}
              setBasketItems={setBasketItems}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
