import {CDN_URL} from "../utils/constants"

const RestaurantCard=({resData})=>{
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,Veg}=resData?.info
    const {deliveryTime}=resData?.info?.sla
        return(
            <div className="m-4 p-4 w-[300px] h-[450px] shadow-lg shadow-gray-350 break-words hover:bg-green-50 hover:cursor-pointer ">
              <img className="rounded-lg w-[300px] h-[200px]" 
              src={CDN_URL + cloudinaryImageId}>
              </img>
                <h3 className="font-bold py-4 text-2xl text-center">{name}</h3>
                <h4 className="font-thick  text-lg text-center">{cuisines.join(",")}</h4>
                <h4 className="font-thick  text-lg text-center">{avgRating} ⭐</h4>
                {/* <h4>{costForTwo}</h4> */}
                <h4 className="font-thick  text-lg text-center">{Veg}</h4>
                <h4 className="font-thick  text-lg text-center">Deliver in {deliveryTime+" minuts"}</h4>
            </div>
        )
    }

export default RestaurantCard