import React, { useEffect, useState } from "react";

const parseItemPrice = (price) => {
  const multiplier = price[price.length - 1] == "b" ? 1e9 : 1e6;

  const parsedPrice = price.trim().replace("m", "").replace("b", "");

  return Number(parsedPrice) * multiplier;
};

export default function ItemCard({ itemId }) {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    fetch("http://0.0.0.0:8000/items/data?item_id=" + itemId, {
      method: "post",
    })
      .then((res) => res.json())
      .then((data) => setItemData(data["item"]));
  }, []);

  if (!itemData) {
    return;
  }

  return (
    <a
      href="#"
      className="w-48 h-48 my-2 mx-4 border-2 
    border-slate-400 rounded-md flex flex-col p-2
    hover:bg-slate-100"
    >
      <div className="flex justify-start w-1/2 mx-auto">
        <img src={itemData["icon_large"]} />
      </div>
      <div className="flex flex-col flex-grow justify-between text-center">
        <h3 className="font-bold">{itemData["name"]}</h3>
        <p className="mb-2">
          {parseItemPrice(itemData["current"]["price"])} gp
        </p>
      </div>
    </a>
  );
}
