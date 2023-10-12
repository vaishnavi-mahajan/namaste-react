import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu=()=>{
    const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId);

    
    if (resInfo===null) return <Shimmer />
    const { name, cuisines, costForTwoMessage,avgRating,areaName}=resInfo?.cards[0]?.card?.card?.info
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

const indices = [0, 1, 2];

const headers = indices.map(index => {
  return resInfo?.cards[1].card.card.gridElements.infoWithStyle.offers[index]?.info.header;
});
// const resultString = headers.join("  ");

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h4>{cuisines.join(",")}</h4>
            <h4>{areaName}</h4>
            <h4>{headers }</h4>
            <h3>{costForTwoMessage}</h3>

            <h3>{avgRating+" "+"Ratings"}</h3>
            <ul>
                {itemCards.map((item)=>(<li key={item.card.info.id}>
                    {item.card.info.name}-{item.card.info.price}</li>))}
            </ul>
        </div>
    )
}
export default RestaurantMenu