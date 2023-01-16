import React, { useEffect, useState } from "react";

const parseItemPrice = (price) => {
  const multiplierMap = {
    m: 1e6,
    k: 1e3,
    b: 1e9,
  };

  let parsedPrice = price.trim();

  const multiplier = multiplierMap[parsedPrice[parsedPrice.length - 1]];

  parsedPrice = parsedPrice.slice(0, -1);

  return Math.round(Number(parsedPrice) * multiplier);
};

export default function ItemCard({ itemId, setPopupItemData }) {
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
      href="#/"
      className="w-48 h-48 my-2 mx-4 border-2 border-slate-400 rounded-md flex flex-col p-2 hover:bg-slate-100"
      onClick={() => setPopupItemData(itemData)}
    >
      <div className="flex justify-start w-1/2 mx-auto">
        <img src={itemData["icon_large"]} />
      </div>
      <div className="flex flex-col flex-grow justify-between text-center">
        <h3 className="font-bold">{itemData["name"]}</h3>
        <p className="mb-2">
          {parseItemPrice(itemData["current"]["price"]).toLocaleString("en-US")}{" "}
          gp
        </p>
      </div>
    </a>
  );
}
