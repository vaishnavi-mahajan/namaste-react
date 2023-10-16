import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex()
  };

  return (
    <div className="w-11/12 shadow-lg p-4 mx-auto my-4 ">
      <div>
        <div
          className="flex justify-between cursor-pointer"
        onClick={handleClick}>
          <span className="text-xl font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <div>
          <span>⬇️</span>
          <span>⬆️</span>
          </div>
        </div>
        {/* <ItemList items={data.itemCards} /> */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
