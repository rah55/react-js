import { useState ,useContext } from "react";
import {Link } from "react-router-dom"
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
 //usecontext is a hook which is the function


const Title = () => {

    const [isLoggedIn , setIsloggedIn] = useState(false);

    const isOnline= useOnline();
   
    const {user} =useContext(UserContext);//here we use the context which are not tight to component we can have it in a central place

    const cartItems = useSelector(store =>store.cart.items);  //here we subscribing the items
    
    console.log(cartItems);
    
    return (
      <div className="Title">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9410/9410808.png"
          alt="logo"
        />
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
            <li><Link to="/instamart">Instamart</Link></li>
            <li><Link to="/cart">Cart-{cartItems.length} items </Link></li>
             
          </ul>

        </div>
        <h1>{isOnline?"✅":"❌"}</h1>
        <h1>{user.name}</h1>

      {isLoggedIn ?
      <button onClick={()=>setIsloggedIn(false)} >logout</button>
      :<button onClick={()=>setIsloggedIn(true)}>login</button>}
        
        
        
      </div>
    );
  };

  export default Title;