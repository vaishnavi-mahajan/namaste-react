import {CDN_URL} from "../utils/constants"

const RestaurantCard=({resData})=>{
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,Veg}=resData?.info
    const {deliveryTime}=resData?.info?.sla
        return(
            <div className="restaurant-card">
              <img className="restaurant-images" 
              src={CDN_URL + cloudinaryImageId}>
              </img>
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{Veg}</h4>
                <h4>{deliveryTime+" minuts"}</h4>
            </div>
        )
    }

export default RestaurantCard