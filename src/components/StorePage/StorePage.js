import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ItemCard from "./ItemCard";

function StorePage(props) {
  const [itemIds, setItemIds] = useState(null);

  useEffect(() => {
    fetch("http://0.0.0.0:8000/items/list")
      .then((res) => res.json())
      .then((data) => setItemIds(data["itemId"].slice(0, 3)));
  }, []);

  if (!itemIds) {
    return;
  }
  const itemCards = itemIds.map((itemId) => (
    <ItemCard key={itemId} itemId={itemId}></ItemCard>
  ));

  return (
    <div>
      <Navbar></Navbar>
      {itemCards}
    </div>
  );
}

export default StorePage;
