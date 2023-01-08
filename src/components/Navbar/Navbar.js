import React from "react";

function Navbar() {
  return (
    <div className="flex w-full bg-black h-16 justify-between items-center">
      <div className="ml-12">
        <a href="/" className="text-white text-3xl">
          Runestore
        </a>
      </div>
      <div className="text-white flex flex-row mr-12 justify-between w-48 h-full items-center">
        <a className="hover:text-lime-200 h-3/4 items-center flex" href="/">
          Home
        </a>
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
          Basket
        </a>
      </div>
    </div>
  );
}

export default Navbar;
