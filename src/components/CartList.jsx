import "../styles/index.css"
import "../styles/CartList.css"
import { CartContext } from "./CartContext"
import { useContext } from "react"
import CartItem from "./CartItem"
import { SquareArrowOutUpRight } from "lucide-react"

const CartList = () => {
   const { cart } = useContext(CartContext);

   const cartPrice = cart.reduce((total, item) => total + item.price, 0);

   return (
      <>
         <div className="cart-list">
            {cart.map((cartItem, index) => {
               return(
                  <div key={cartItem.id * 3.33} className="cart-item-wrapper">
                     <CartItem cartItem={cartItem} />
                     {index !== (cart.length - 1) && <div className="line"></div>}
                  </div>
               );
            })}
         </div>
         <div className="line show"></div>
         <div className="cart-total">
            <div className="cart-total-wrapper">TOTAL PRICE: <span className="cart-total-span">${cartPrice}</span></div>
            <button className="checkout">
               Proceed To Checkout 
               <SquareArrowOutUpRight style={{marginLeft:"15px"}} />
            </button>
         </div>
      </>
   )
}

export default CartList;