import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [Searchtext, setSerchtext] = useState("");
  const [filteRestaurant, setfilteRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.478849&lng=73.819062&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline! Plase check your internet connection</h1>
    );

  // if(ListOfRestaurant.length!==0 )return<Shimmer></Shimmer>

  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={Searchtext}
              onChange={(event) => {
                setSerchtext(event.target.value);
              }}></input>

            <button
              className="search-button"
              onClick={() => {
                const filteRestaurant = ListOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(Searchtext.toLowerCase())
                );
                setfilteRestaurant(filteRestaurant);
              }}>
              Search
            </button>
          </div>

          <button
            className="filter-btn"
            onClick={() => {
              const FilteredListOfRestaurant = ListOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurant(FilteredListOfRestaurant);
            }}>
            Rating 4.0+
          </button>

          <button
            className="fastDelivery-btn"
            onClick={() => {
              // Sort the fastDelivery state in descending order by delivery time
              const sortedFastDelivery = [...ListOfRestaurant].sort(
                (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
              );
              setfilteRestaurant(sortedFastDelivery);
            }}>
            Fast Delivery
          </button>
        </div>
      </div>

      <div className="restaurant-container">
        {filteRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/resturants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant}></RestaurantCard>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
