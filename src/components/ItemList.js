import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-300 border-b-2 text-left flex">
            <div className="w-9/12">
              <div className="py-2">
                <span className=" text-xl">{item.card.info.name}</span>
                <span className=" block text-xl font-bold">
                - ₹{item.card.info.price
                    ? item.card.info.price/100 
                    : item.card.info.defaultPrice/100}</span>
              </div>
              <div>
                <p className="text-sm line-clamp-3">
                  {item.card.info.description}
                </p>
              </div>
            </div>
            <div className="p-2 ml-auto w-3/12 bottom-[-100px]">
              <div className="absolute m-auto ">
              <button className=" bg-black ml-[3rem] text-white p-2 rounded-md mx-[2rem] ">Add+</button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-[80%] shadow-gray-350 rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
