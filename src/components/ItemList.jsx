import "../styles/index.css";
import "../styles/ItemList.css";
import { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = () => {
   const [items, setItems] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [hoveredButton, setHoveredButton] = useState(null);
   const [changedButtons, setChangedButtons] = useState([]);

   useEffect(() => {
      const testAPI = async () => {
         try {
            const response = await fetch(
               "https://fakestoreapi.com/products/category/men's%20clothing?limit=9"
            );
            if (!response.ok) {
               throw new Error(response.status);
            }
            const data = await response.json();
            setItems(data);
            console.log(data);
            setError(null);
         } catch (err) {
            setError(err.message);
            setItems([]);
         } finally {
            setLoading(false);
         }
      };

      testAPI();
   }, []);

   const hoverIn = (itemId) => {
      setHoveredButton(itemId);
   };

   const hoverOut = () => {
      setHoveredButton(null);
   };

   const changeButton = (item) => {
      if (!changedButtons.includes(item)) {
         setChangedButtons((prevChangedButtons) => [...prevChangedButtons, item]);
         setTimeout(() => {
            setChangedButtons((prevChangedButtons) =>
               prevChangedButtons.filter((changedItem) => changedItem !== item)
            );
         }, 1500);
      }
   };

   return (
      <>
         <div>
            {loading && <p>Loading items...</p>}
            {error && <p>Error loading items ({error})</p>}
         </div>
         <div className="item-list">
            {!error &&
               items.map((item) => {
                  return (
                     <Item
                        key={item.id}
                        item={item}
                        buttonHoverIn={hoverIn}
                        buttonHoverOut={hoverOut}
                        hoveredButton={hoveredButton}
                        setChangeButtons={changeButton}
                        changedButtons={changedButtons}
                     />
                  );
               })}
         </div>
      </>
   );
};

export default ItemList;
