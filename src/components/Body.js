import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body=()=>{
    const[ListOfRestaurant, setListOfRestaurant]=useState([])
    const[VegRestaurant,setVegRestaurant]=useState([])
    const[Searchtext, setSerchtext]=useState("")
    const[filteRestaurant, setfilteRestaurant]=useState([])
    useEffect(()=>{fetchData()},[])

const fetchData= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.478849&lng=73.819062&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}


    return ListOfRestaurant.length===0 ? (<Shimmer /> 
    ):(
        <div className="body-container">
        <div className="filter">

       <div className="search">
        <input type="text" className="search-box" value={Searchtext} 
        onChange={(event)=>{
            setSerchtext(event.target.value)
        }}></input>

       <button
       onClick={()=>{
        const filteRestaurant= ListOfRestaurant.filter(
            (res)=>res.info.name.toLowerCase().includes(Searchtext.toLowerCase()))
            setfilteRestaurant(filteRestaurant)
        console.log(filteRestaurant)
       }}
       >
        Search</button>
        </div>    
       
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
        {filteRestaurant.map(
            restaurant=><RestaurantCard key={
                restaurant.info.id} resData={restaurant}></RestaurantCard>)
        }
        </div>
        </div>

    )
}
export default Body