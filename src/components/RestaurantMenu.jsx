import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_link, Menu_link } from "../config";
import Loader from "./loader";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [items, setItems] = useState(null);

  const dispatch =useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("grapes"));
  };

  const addFoodItem = (item)=>{
    dispatch(addItem(item));
  };


  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(Menu_link + id);

    const json = await data?.json();

    const menuArray =
      (json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map(
        (item) => item?.card?.info
      );

    setRestaurant(json?.data?.cards[2]?.card?.card?.info);

    setItems(menuArray);
  }

  return !restaurant && !items ? (
    <Loader />
  ) : (
   
    <div className="restaurant-menu">
      <div className="restaurant-menu-data">
        <h1>Restaurant id : {restaurant?.id}</h1>
        <h3>Restaurant name : {restaurant?.name}</h3>
        <img
          src={IMG_link + restaurant?.cloudinaryImageId}
          alt="restaurant-Image"
        />

        <h3>Restaurant Area : {restaurant?.areaName}</h3>
        <h3>Restaurant City : {restaurant?.city}</h3>
        <h3>Restaurant City : {restaurant?.avgRating} stars</h3>
      
      </div>
     
     
      

      <div className="menu-items">
        <ul className="list">
          {" "}
          <h1>Menu Items</h1>
          {items.map((item) => (
            <li key={item.id}>{item.name} -
                  <button className="addItem" onClick={()=> addFoodItem(item)}>Add</button>
                  </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
