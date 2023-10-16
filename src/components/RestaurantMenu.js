import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;
  const { minDeliveryTime } = resInfo?.cards[0]?.card?.card?.info.sla;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="px-80 py-4">
      <div className="text-left m-8 px-4 py-4 shadow-md bg-green-50 relative">
        <div className="flex justify-between">
          <div className="">
            <h1 className="text-4xl my-2 font-bold">{name}</h1>
            <h4 className="text-lg my-2 font-bold italic">
              {cuisines.join(", ")}
            </h4>
            <h4 className="text-lg font-bold leading-loose">
              {areaName}, {minDeliveryTime} Km
            </h4>
            <h3 className="text-lg font-bold">{costForTwoMessage}</h3>
          </div>
          <div className="text-right  ">
            <h3 className="text-lg font-bold ">{avgRating}⭐</h3>
            <h3 className="text-lg font-bold ">{totalRatingsString}</h3>
          </div>
        </div>
      </div>
      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
