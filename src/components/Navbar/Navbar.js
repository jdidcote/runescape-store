import React, { useEffect, useState } from "react";

function Navbar({ basketItems, setBasketItems }) {
  const [numberOfItems, setNumberOfItems] = useState(0);

  useEffect(() => {
    setNumberOfItems(countTotalBasketItems());
  });

  const countTotalBasketItems = () => {
    let noItems = 0;
    // Count the total quantities of all items in the basket currently
    for (let [item, count] of Object.entries(basketItems)) {
      noItems += parseInt(count);
      console.log(noItems);
    }
    return noItems;
  };

  return (
    <div className="flex w-full bg-black h-16 justify-between items-center fixed">
      <div className="ml-12">
        <a href="/store" className="text-white text-3xl">
          Runestore
        </a>
      </div>
      <div className="text-white flex flex-row mr-12 justify-between w-36 h-full items-center">
        <a
          className="hover:text-lime-200 h-3/4 items-center flex"
          href="/store"
        >
          Store
        </a>
        <a
          className="hover:text-lime-200 h-3/4 items-center flex"
          href="/basket"
        >
          Basket {numberOfItems > 0 && `(${numberOfItems})`}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
