import { useContext } from "react";
import "../styles/index.css";
import "../styles/ItemList.css";
import { CirclePlus, CircleCheck } from "lucide-react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

const Item = ({
   item,
   buttonHoverIn,
   buttonHoverOut,
   hoveredButton,
   setChangeButtons,
   changedButtons,
}) => {
   const { cart, addToCart } = useContext(CartContext);

   const cartItem = cart.find((cartItem) => cartItem.id === item.id);
   const quantity = cartItem ? cartItem.quantity : 0;

   const truncateTitle = (description, wordLimit) => {
      const words = description.split(" ");
      if (words.length <= wordLimit) {
         return description;
      }
      return words.slice(0, wordLimit).join(" ");
   };

   const truncateDescription = (description, wordLimit) => {
      const words = description.split(" ");
      if (words.length <= wordLimit) {
         return description;
      }
      return words.slice(0, wordLimit).join(" ") + "...";
   };

   return (
      <div className="item">
         <img className="item-image" src={item.image} alt={item.title} />
         <div className="item-content-wrapper">
            <h3>{truncateTitle(item.title, 3)}</h3>
            <div className="item-description">
               {truncateDescription(item.description, 20)}
            </div>
            <div className="item-price">${parseInt(item.price)}</div>
         </div>
         <button
            className="item-button"
            type="button"
            onMouseEnter={() => buttonHoverIn(item.id)}
            onMouseLeave={() => buttonHoverOut()}
            onClick={() => {
               setChangeButtons(item);
               if (!changedButtons.includes(item)) {
                  addToCart(item);
               }
            }}
         >
            {!changedButtons.includes(item) ? "ADD TO CART " : "ADDED TO CART "}
            {quantity > 0 && (
               `(${quantity})`
            )}
            {!changedButtons.includes(item) && (
               <CirclePlus
                  className="lucide-plus"
                  size={20}
                  style={{
                     marginLeft: "10px",
                     marginRight: "10px",
                     color: hoveredButton === item.id ? "black" : "white",
                     transition: "all 0.3s ease-in-out",
                  }}
               />
            )}
            {changedButtons.includes(item) && (
               <CircleCheck
                  size={20}
                  style={{
                     marginLeft: "10px",
                     marginRight: "10px",
                     color: "var(--green)",
                  }}
               />
            )}
         </button>
      </div>
   );
};

Item.propTypes = {
   item: PropTypes.object,
   buttonHoverIn: PropTypes.func,
   buttonHoverOut: PropTypes.func,
   hoveredButton: PropTypes.number,
   setChangeButtons: PropTypes.func,
   changedButtons: PropTypes.array,
};

export default Item;
