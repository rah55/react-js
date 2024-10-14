import { IMG_link } from "../config";
export const RestaurantCard = ({name,areaName,cuisines,avgRating,cloudinaryImageId} ) => {
    
    return (
      <div className="cards">
        {/* {console.log(props)} */}
        <img
          src={
            IMG_link
            +
           cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h4>{areaName}</h4>
        <h6>{cuisines.join(",")}</h6>
        <h4>{avgRating} Stars</h4>
        
      </div>
    );
  };
  