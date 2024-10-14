import { useContext, useEffect, useState } from "react";
import { restaurantList } from "../config";
import { RestaurantCard } from "./RestaurantCard";
import Loader from "./loader";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";




const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, SetSearchText] = useState("");
  const {user ,setUser}= useContext(UserContext);

  useEffect(()=>{
    getRestaurant()

  },[]);

  async function getRestaurant(){

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.644800&lng=77.21672169999999");
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const offline= useOnline();

  if(!offline){
    return <h1>Please check Your Internet Connection ,you Are Offline</h1>;
  }
  //early return if a component is not there
  if(!allRestaurants)return null;

  

  return (allRestaurants.length===0)? <Loader /> :(
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            SetSearchText(e.target.value.toLowerCase());
          }}
        />
        

        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            // console.log(data);
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
        <input
        type="text"
        placeholder="search-name"
        value={user.name}
        onChange={(e) => setUser({
          ...user,
          name:e.target.value,
         
        })
          
        }
      />
       <input
        type="text"
        placeholder="search-email"
        value={user.email}
        onChange={(e) => setUser({
          ...user,
          email:e.target.value,
          
        })
          
        }
      />
      </div>

      <div className="body-items">
        {filteredRestaurants.map((restaurant) => {
          return ((filteredRestaurants.length===0)) ? <h1>search not found</h1>:(
            <Link className="links"to={"/restaurant/" + restaurant.info.id}><RestaurantCard {...restaurant.info} key={restaurant.info.id} /></Link>
            
          );
        })}
      </div>
    </>
  );
};

export default Body;
