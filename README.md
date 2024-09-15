# E-Commerce React App

## Overview

This is a simple E-Commerce web application built using React and React Router. The application allows users to browse a list of items fetched from an external API, add them to a cart, and view or remove items from the cart. The application also supports a basic checkout process (no real checkout).

## Features

- **Item Listing:** Displays a list of items from a mock API (`https://fakestoreapi.com/`), with functionality for adding items to the cart.

- **Cart Management:** Users can add, view, and remove items from the cart. The cart's total price is displayed, and users can proceed to checkout.

- **Navigation:** Simple navigation between the home page (item listing) and the cart page.

- **State Management:** Cart state is managed using React's Context API, ensuring the cart state persists across different components.

## Installation & Setup

### Prerequisites

Make sure you have Node.js installed on your system.

### Steps

1\. **Clone the repository:**

   git clone <repository-url>

   cd <repository-directory>

2\. **Install dependencies:**

   npm install

3\. **Run the app:**

   npm start

4\. **View in browser:**

   Open `http://localhost:3000` in your browser.

## Components Breakdown

### 1. `App.jsx`

- Main component that includes the `Navigation` and `ItemList` components.

- Contains the layout for the home page and displays a list of available items.

### 2. `ItemList.jsx`

- Fetches items from the API and renders them using the `Item` component.

- Displays loading and error states if necessary.

### 3. `Item.jsx`

- Individual item component showing item details (image, title, description, price).

- Users can add items to the cart. Added items show a visual change in the button state.

### 4. `Cart.jsx`

- Displays the current cart items and allows users to view the total price of the cart.

- Users can also proceed to checkout from this page.

### 5. `CartList.jsx`

- Renders all cart items using the `CartItem` component.

- Shows a summary of the cart's total price.

### 6. `CartItem.jsx`

- Represents an individual item in the cart.

- Displays item details like image, title, price, and quantity.

### 7. `CartContext.jsx`

- Handles the global state of the cart using React's Context API.

- Provides `addToCart`, `removeFromCart`, `isInCart`, and `cartSize` functionalities to manage the cart state.

### 8. `Navigation.jsx`

- Renders the navigation bar with links to the home page and the cart page.

- Displays the cart size (number of items in the cart) next to the cart icon.

## API Integration

The app fetches data from the **FakeStore API**:

- API endpoint: `https://fakestoreapi.com/products/category/men's%20clothing?limit=9`

- This API returns a list of men's clothing items, which are displayed on the home page.

## Styling

- All styles are located in the `styles/` folder, and each component has its own dedicated CSS file.

- Global styles are found in `index.css`.

## License

This project is licensed under the MIT License.