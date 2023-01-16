import React from "react";

export default function ItemPopup({ itemData }) {
  if (!itemData) {
    return;
  }
  return (
    <div
      className="w-1/3 h-auto border-2 border-black rounded-md fixed left-0 right-0 m-auto 
                 mt-48 bg-white flex flex-col z-10"
    >
      <div className="mx-auto mt-4 text-xl font-bold px-4">
        {itemData["name"]}
      </div>
      <div className="flex justify-center w-1/2 h-1/4 mx-auto">
        <img src={itemData["icon_large"]} />
      </div>
      <div className="mx-auto mt-4 text-md italic px-4">
        {itemData["description"]}
      </div>
      <div className="mx-auto flex my-6">
        <p>Quantity:</p>
        <input
          type="number"
          min="1"
          className="border-2 w-12 mx-2 rounded-lg"
        ></input>
      </div>
      <div className="mb-2 flex justify-center mx-6 flex-wrap">
        <button className="border-2 border-black px-2 rounded-lg bg-red-200 shadow-lg mx-4 my-1">
          Close
        </button>
        <button className="border-2 border-black px-2 rounded-lg bg-green-200 shadow-lg mx-4 my-1">
          Add
        </button>
      </div>
    </div>
  );
}
