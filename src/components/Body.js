import RestaurantCard from "./RestaurantCard"
import restaurantList from "../utils/mockData"
import { useState } from "react"

const Body=()=>{
    const[ListOfRestaurant, setListOfRestaurant]=useState(restaurantList)
    const[VegRestaurant,setVegRestaurant]=useState(restaurantList)
    

    return(
        <div className="body-container">
       <div className="search">Search</div>
       <div className="filter">
        <button className="filter-btn" 
        onClick={()=>{
            const FilteredListOfRestaurant=ListOfRestaurant.filter(
                (res)=>res.info.avgRating>4);
                setListOfRestaurant(FilteredListOfRestaurant)
        }}>
        Top Rated Restaurant
          </button>

          <button className="veg-btn" onClick={()=>{
                const filteredvegrestaurant=VegRestaurant.filter(
                    (vegres)=>vegres.info.Veg==="Veg"
                    )
                    setVegRestaurant(filteredvegrestaurant)
            }}>
                Veg
            </button>

          </div>

       <div className="restaurant-container">
        {
            ListOfRestaurant.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}></RestaurantCard>)
        }
        </div>
        </div>

    )
}
export default Body