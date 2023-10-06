import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants"

const RestaurantMenu=()=>{
    [resInfo, setResInfo]=useState(null)
    useEffect(()=>{
        fetchMenu()
    },[])
    const {resId}=useParams();

    const fetchMenu=async()=>{
        const data=await fetch(MENU_API+resId)
        const json=await data.json()
        setResInfo(json.data)
    }
    
    if (resInfo===null) return <Shimmer />
    const { name, cuisines, costForTwoMessage,avgRating,}=resInfo?.cards[0]?.card?.card?.info
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h4>{cuisines.join(",")}</h4>
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