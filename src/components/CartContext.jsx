import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const addToCart = (item) => {
      setCart((prevCart) => {
         // Check if item is already in the cart
         const existingItemIndex = prevCart.findIndex(
            (cartItem) => cartItem.id === item.id
         );

         if (existingItemIndex > -1) {
            // Item exists, increase quantity
            const updatedCart = [...prevCart];
            updatedCart[existingItemIndex].quantity += 1;
            return updatedCart;
         } else {
            // Item doesn't exist, add it with quantity 1
            return [...prevCart, { ...item, quantity: 1 }];
         }
      });
   };

   const removeFromCart = (item) => {
      const updatedCart = cart.filter((cartItem) => cartItem !== item);
      setCart(updatedCart);
   };

   const isInCart = (item) => {
      if (cart.includes(item)) {
         return true;
      } else {
         return false;
      }
   };

   const cartSize = useMemo(() => {
      return cart.reduce((total, item) => total + item.quantity, 0);
   }, [cart]);

   return (
      <CartContext.Provider
         value={{ cart, addToCart, removeFromCart, isInCart, cartSize }}
      >
         {children}
      </CartContext.Provider>
   );
};

CartProvider.propTypes = {
   children: PropTypes.node.isRequired,
};

export { CartProvider, CartContext };
