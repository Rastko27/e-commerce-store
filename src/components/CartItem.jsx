import "../styles/index.css";
import "../styles/CartItem.css";
import PropTypes from "prop-types";

const CartItem = ({ cartItem }) => {
   const truncateTitle = (description, wordLimit) => {
      const words = description.split(" ");
      if (words.length <= wordLimit) {
         return description;
      }
      return words.slice(0, wordLimit).join(" ");
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
               <span className="cart-quantity-number">{cartItem.quantity}</span>
            </div>
            <div className="cart-line"></div>
            <div className="cart-price">
               Total:
               <span className="cart-price-number">
                  ${cartItem.price * cartItem.quantity}
               </span>
            </div>
         </div>
      </div>
   );
};

CartItem.propTypes = {
   cartItem: PropTypes.object,
   cartPrice: PropTypes.number
};

export default CartItem;
