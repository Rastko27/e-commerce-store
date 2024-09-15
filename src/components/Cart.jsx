import "../styles/index.css"
import "../styles/Cart.css"
import Navigation from "./Navigation"
import CartList from "./CartList"

const Cart = () => {
   return (
      <div className="cart-page">
         <Navigation />
         <div className="container cart-hero-wrapper">
            <h2 className="hero-heading">CART</h2>
            <CartList />
         </div>
      </div>
   )
}

export default Cart;