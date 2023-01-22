import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ItemCard from "./ItemCard";
import ItemPopup from "./ItemPopup";

function StorePage({ basketItems, setBasketItems }) {
  const [itemIds, setItemIds] = useState(null);
  const [popupItemData, setPopupItemData] = useState(null);

  useEffect(() => {
    fetch("http://0.0.0.0:8000/items/list")
      .then((res) => res.json())
      .then((data) => setItemIds(data["itemId"]));
  }, []);

  if (!itemIds) {
    return;
  }
  const itemCards = itemIds.map((itemId) => (
    <ItemCard
      key={itemId}
      itemId={itemId}
      setPopupItemData={setPopupItemData}
    ></ItemCard>
  ));

  const getItemStyle = () => {
    let style =
      "flex flex-wrap justify-center m-auto mt-16 mx-32 overflow-y-scroll h-[90vh] ";
    if (popupItemData) {
      style += "blur-sm";
    }
    return style;
  };

  return (
    <div className="flex flex-col">
      <Navbar
        basketItems={basketItems}
        setBasketItems={setBasketItems}
      ></Navbar>

      <ItemPopup
        itemData={popupItemData}
        setPopupItemData={setPopupItemData}
        s
        basketItems={basketItems}
        setBasketItems={setBasketItems}
      />
      <div className={getItemStyle()}>{itemCards}</div>
    </div>
  );
}

export default StorePage;
