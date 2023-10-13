import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu=()=>{
    const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId);

    
    if (resInfo===null) return <Shimmer />
    const { name, cuisines, costForTwoMessage,avgRating,areaName, cloudinaryImageId, totalRatingsString, }=resInfo?.cards[0]?.card?.card?.info
    const {minDeliveryTime,lastMileTravelString}= resInfo?.cards[0]?.card?.card?.info.sla
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

const indices = [0, 1, 2];

const headers = indices.map(index => {
  return resInfo?.cards[1].card.card.gridElements.infoWithStyle.offers[index]?.info.header;
});

const{title}=resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.title

// const resultString = headers.join("  ");
// const {couponCode, expiryTime, offerLogo, offerTag, restId}=resInfo?.cards[1].card.card.gridElements.infoWithStyle.offers[0].info

//data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[0].card.card.vegOnlyDetails
//data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.category
//data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.title


return(
<div className="px-80 py-4">
  <div className="text-left m-8 px-4 py-4 shadow-md bg-green-50 relative">
    <div className="flex justify-between">
      <div className="">
        <h1 className="text-4xl font-bold">{name}</h1>
        <h4 className="text-lg font-bold italic">{cuisines.join(", ")}</h4>
        <h4 className="text-lg font-bold leading-loose">
          {areaName}, {minDeliveryTime} Km
        </h4>
        {/* <h4 className="text-lg font-bold">{headers}</h4> */}
        <h3 className="text-lg font-bold">{costForTwoMessage}</h3>
      </div>
      <div className="text-right  ">
        <h3 className="text-lg font-bold ">{avgRating}⭐</h3>
        <h3 className="text-lg font-bold ">{totalRatingsString}</h3>
      </div>
    </div>
  </div>
  <ul className="text-lg font-medium border-dotted shadow-lg">
    <li className="flex justify-between items-center font-bold text-2xl">
      <span>Item</span>
      <span>Price</span>
    </li>
    {itemCards.map((item) => (
      <li key={item.card.info.id} className="flex justify-between items-center py-2">
        <span>{item.card.info.name}</span>
        <span className="text-right">{item.card.info.price}</span>
      </li>
    ))}
  </ul>
</div>


)







    }
export default RestaurantMenu