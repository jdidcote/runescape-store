import React, { useEffect, useState } from "react";

export default function ItemCard({ itemId }) {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    fetch("http://0.0.0.0:8000/items/data?item_id=" + itemId, {
      method: "post",
    })
      .then((res) => res.json())
      .then((data) => setItemData(data["item"]));
  }, []);

  console.log(itemData);

  return <div>Item ID: {itemId}</div>;
}
