# Student Store Project

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API will be built with Node and Express, and the UI will be built with React.

Check out our [deployed Student Store](https://codepath-student-store-demo.surge.sh/) for reference! Explore the exemplar by trying the following tasks:

- Click on the different categories (clothing, food, etc.) to filter the list of products.
- Search for an existing product.
- Search for a product that doesn't exist.
- Add several products to the shopping cart.
- Checkout and view the final receipt.

## *Week 2* Application Features

<a href="https://www.loom.com/share/1de0233b4115424ab935bd3286931e52">
  <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/1de0233b4115424ab935bd3286931e52-1687569080934-with-play.gif">
</a>

### Core Features

- [x] The website displays header, banner, search, product grid, about, contact, and footer section.
- [x] The website displays the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store) on initial page load.
- [x] Users can click on a category (clothing, food, etc.) to filter the product grid by type.
- [x] Users can search for products.
- [x] User can click on a product in the grid to navigate to a new page containing additional product details.

### Stretch Features

- [x] Users can click to expand the shopping cart in the left navigation.
- [x] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [x] Users can click the '-' button on a product cart to decrement that product in the shopping cart.
- [x] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [x] Users can turn on or off a switch to sort results increasing by price.

## *Week 3* Application Features

<a href="https://www.loom.com/share/753e3f5464da4987b2d0a86399d6740b">
  <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/753e3f5464da4987b2d0a86399d6740b-with-play.gif">
</a>

### Core Features

- [x] User can click to expand the shopping cart in the left navigation.
- [x] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [x] Users can click the '-' button on a product cart to decrement that product in the shopping cart. If the count is zero, the product should be removed from the cart.
- [x] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [x] Users can checkout, and receive a receipt confirming their purchase.

### Stretch Features

- [x] Create an endpoint for fetching all orders in the database and an endpoint for serving an individual order based on its ID.
- [x] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.
- [x] Allow users to use an input to filter orders by the email of the person who placed the order.
- [x] Users can create a wish list of products they are interested in but not yet ready to purchase.
