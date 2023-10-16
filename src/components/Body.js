import RestaurantCard, { withIsOpenLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [Searchtext, setSerchtext] = useState("");
  const [filteRestaurant, setfilteRestaurant] = useState([]);

  console.log(ListOfRestaurant, "ListOfRestaurant");
  const OpenRestaurantComponent = withIsOpenLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.478849&lng=73.819062&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
        <div className="flex m-1 p-1 items-center justify-center ">
          <div className="search m-4 p-2">
            <input
              type="text"
              className="border bold border-solid border-black 	border-width: 8px;"
              value={Searchtext}
              onChange={(event) => {
                setSerchtext(event.target.value);
              }}></input>

            <button
              className="px-2 py-2 bg-green-100 m-4 rounded-xl font-bold text-lg"
              onClick={() => {
                const filteRestaurant = ListOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(Searchtext.toLowerCase())
                );
                setfilteRestaurant(filteRestaurant);
              }}>
              Search
            </button>
          </div>
          <div className="m-4 p-4 flex items-center">
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-xl font-bold text-lg"
              onClick={() => {
                const FilteredListOfRestaurant = ListOfRestaurant.filter(
                  (res) => res.info.avgRating > 4
                );
                setListOfRestaurant(FilteredListOfRestaurant);
              }}>
              Rating 4.0+
            </button>
          </div>
          <div className="m-4 p-4 flex items-center">
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-xl font-bold text-lg"
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
      </div>

      <div className="flex flex-wrap bg">
        {filteRestaurant.map((restaurant) => (
          
          <Link
            key={restaurant.info.id}
            to={"/resturants/" + restaurant.info.id}>
            {restaurant.info.isOpen ? (
              <OpenRestaurantComponent resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant}></RestaurantCard>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
