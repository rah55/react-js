import { useDispatch, useSelector } from "react-redux";
import FoodItems  from "./FoodItems";
import { clearCart } from "../utils/cartSlice";


const Cart =()=>{

const cartItems = useSelector(store=>  store.cart.items);

const dispatch = useDispatch();
const handleClearCart=()=>{
    dispatch(clearCart());

}


   return <>
<h1>
    Cart Items -{cartItems.length} 
     
    <button onClick={()=>handleClearCart()}>Clear Cart</button>
   
</h1>
<div className="orderItems">
{cartItems.map((item)=>(
    <FoodItems key={item.id} {...item}/>
 ))}
</div>
 
    
    </>
}

export default Cart;