//This is a script that helps the user to add products to the shopping cart.

var all_add_cart_buttons;
var product_number;
var id_name;
var id_price;
var name_of_product_selected;
var price_of_product_selected;
var price_of_product_selected_numeric;

$(document).ready(function () {
  console.log("Loaded add_to_cart.js");

  //For each of the Add to Cart buttons, we run this code to allow for product information associated with each button to be stored in Storage when the user clicks on the button.
  all_add_cart_buttons = document.querySelectorAll(".add_to_cart_button");
  for (i = 0; i < all_add_cart_buttons.length; i++) {
    all_add_cart_buttons[i].addEventListener("click", function () {
      alert(
        "You have added an item to the cart. Check the 'Cart' page to view your updated cart."
      );

      // Collect the information about product name and price and format it accordingly for manipulation later on in the code.
      product_number = this.name;
      id_name = "#" + "product" + product_number + "_name";
      id_price = "#" + "product" + product_number + "_price";
      name_of_product_selected = $(id_name).html();
      price_of_product_selected = $(id_price).html();
      price_of_product_selected_numeric = price_of_product_selected.slice(
        1,
        price_of_product_selected.length
      );

      // For debugging:
      console.log("You selected: " + name_of_product_selected);
      console.log("Cost of selection is: " + price_of_product_selected);

      // Store product names in a sessionStorage key/value pair.

      if (sessionStorage.getItem("products_in_my_cart") === null) {
        sessionStorage.setItem(
          "products_in_my_cart",
          JSON.stringify([name_of_product_selected])
        );
        console.log("Added " + name_of_product_selected + " to empty cart");
      } else {
        var products_in_cart = JSON.parse(
          sessionStorage.getItem("products_in_my_cart")
        );
        products_in_cart.push(name_of_product_selected);
        sessionStorage.setItem(
          "products_in_my_cart",
          JSON.stringify(products_in_cart)
        );
        console.log(
          "Added " + name_of_product_selected + " to your existing cart"
        );
      }

      // Store product prices in a sessionStorage key/value pair.

      if (sessionStorage.getItem("prices_in_my_cart") === null) {
        sessionStorage.setItem(
          "prices_in_my_cart",
          JSON.stringify([price_of_product_selected_numeric])
        );
        console.log(
          "Added " + price_of_product_selected_numeric + " to list of prices"
        );
      } else {
        var prices_in_cart = JSON.parse(
          sessionStorage.getItem("prices_in_my_cart")
        );
        prices_in_cart.push(price_of_product_selected_numeric);
        sessionStorage.setItem(
          "prices_in_my_cart",
          JSON.stringify(prices_in_cart)
        );
        console.log("Updated list of prices");
      }

      // Store (and update) a running total of the price.

      if (sessionStorage.getItem("total_price_of_my_cart") === null) {
        sessionStorage.setItem(
          "total_price_of_my_cart",
          price_of_product_selected_numeric
        );
        console.log(
          "Added " + price_of_product_selected + " to total price of your cart"
        );
      } else {
        var total_price = sessionStorage.getItem("total_price_of_my_cart");
        total_price =
          Number(total_price) + Number(price_of_product_selected_numeric);
        sessionStorage.setItem("total_price_of_my_cart", total_price);
        console.log(
          "Added " +
            price_of_product_selected +
            " to your cart, now your cart totals " +
            total_price
        );
      }
    });
  }
});
