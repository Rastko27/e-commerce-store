import "../styles/index.css";
import "../styles/CartItem.css";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { CircleX } from "lucide-react"

const CartItem = ({ cartItem }) => {
   const [quantityInput, setQuantityInput] = useState(cartItem.quantity);

   const { updateQuantity, removeFromCart } = useContext(CartContext);

   const truncateTitle = (description, wordLimit) => {
      const words = description.split(" ");
      if (words.length <= wordLimit) {
         return description;
      }
      return words.slice(0, wordLimit).join(" ");
   };

   const handleQuantityChange = (event) => {
      const newQuantity = parseInt(event.target.value, 10) || 0;
      setQuantityInput(newQuantity);
      updateQuantity(cartItem.id, newQuantity); // Pass id and new quantity to parent handler
   };

   return (
      <div className="cart-item">
         <div className="cart-left">
            <img
               className="cart-item-image"
               src={cartItem.image}
               alt={cartItem.title}
            />
            <h3 className="cart-item-title">
               {truncateTitle(cartItem.title, 3)}
            </h3>
         </div>
         <div className="cart-right">
            <div className="cart-quantity">
               Qty:
               <input
                  type="number"
                  value={quantityInput}
                  onChange={(event) => handleQuantityChange(event)}
                  min={1}
               />
            </div>
            <div className="cart-line"></div>
            <div className="cart-price">
               Total:
               <span className="cart-price-number">
                  ${cartItem.price * cartItem.quantity}
               </span>
            </div>
            <CircleX
               size={"33px"}
               strokeWidth={"1.5px"}
               className="circle-x"
               onClick={() => {removeFromCart(cartItem)}}
            />
         </div>
      </div>
   );
};

CartItem.propTypes = {
   cartItem: PropTypes.object,
};

export default CartItem;
