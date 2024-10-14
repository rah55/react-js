import { IMG_link } from "../config";
const FoodItems = ({name,description,price,imageId} ) => {
    
    return (
      <div className="cards">
        {/* {console.log(props)} */}
       
        <h2>{name}</h2>
        <img src={IMG_link+imageId}/>
        <h6>{description}</h6>
        <h4>Rupees: {price/100} </h4>
        
      </div>
    );
  };
  

  export default FoodItems;