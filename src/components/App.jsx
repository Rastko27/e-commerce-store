import "../styles/index.css"
import "../styles/App.css"
import Navigation from "./Navigation.jsx"
import ItemList from "./ItemList.jsx"

function App() {
  return (
    <div className="app-wrapper">
      <Navigation />
      <div className="container hero-wrapper">
        <h2 className="hero-heading">ITEMS</h2>
        <ItemList />
      </div>
    </div>
  )
}

export default App
