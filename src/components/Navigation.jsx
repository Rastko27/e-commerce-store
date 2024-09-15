import "../styles/index.css"
import "../styles/Navigation.css"
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"
import { useContext } from "react";
import { CartContext } from "./CartContext.jsx"

const Navigation = () => {
   const { cartSize } = useContext(CartContext);
   
   return (
      <div className="container nav">
         <Link to={"/"}><h1>E-commerce Shop</h1></Link>
         <Link to={"/cart"} className="cart-button">
            <ShoppingCart className="cart-image" strokeWidth={1.5} size={32} />
            <div className="cart-number">{cartSize}</div>
         </Link>
      </div>
   )
}

export default Navigation;