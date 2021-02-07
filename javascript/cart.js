//This is a script that populates the cart page with the items in the cart.

var my_cart_enumerate;
var my_cart_price;

$(document).ready(function () {
  console.log("Loaded cart.js.");

  // get the information from Storage
  var products = JSON.parse(sessionStorage.getItem("products_in_my_cart"));
  var price = sessionStorage.getItem("total_price_of_my_cart");
  var price_list = JSON.parse(sessionStorage.getItem("prices_in_my_cart"));

  // if there are no products in cart, then terminate by returning so that we avoid the index errors that would arise if we were to loop through empty objects.
  if (products === null && price === null && price_list === null) {
    return;
  }

  // display the information retrieved from Storage - this helps with debugging
  console.log("Products: " + products);
  console.log("Price: " + price);
  console.log("List of prices: " + price_list);

  // we construct 'temporary' variables to help with counting the # of each unique product selected so that we can more easily display this in the table.

  my_cart_enumerate = {};
  my_cart_price = {};

  for (i = 0; i < products.length; i++) {
    if (!(products[i] in my_cart_enumerate)) {
      my_cart_enumerate[products[i]] = 1;
      my_cart_price[products[i]] = Number(price_list[i]);
    } else {
      my_cart_enumerate[products[i]] += 1;
      my_cart_price[products[i]] += Number(price_list[i]);
    }
  }

  // print list of unique products -for debugging

  var list_of_unique_products = Object.keys(my_cart_enumerate);
  console.log("print keys");
  console.log(list_of_unique_products);

  // we then unhide the elements that were hidden when there were no products in the cart.

  $("#cart_display").css("visibility", "visible");
  $("#nothing_in_cart").css("visibility", "hidden");
  $("#have_cart").css("visibility", "visible");
  $("#delivery_form_container").css("visibility", "visible");

  // and then we populate the table with the information (quantity & subtotal)
  for (i = 0; i < list_of_unique_products.length; i++) {
    console.log(list_of_unique_products[i]);
    var newrow =
      "<tr><td>" +
      list_of_unique_products[i] +
      "</td><td>" +
      my_cart_enumerate[list_of_unique_products[i]] +
      "</td>" +
      "<td>" +
      parseFloat(my_cart_price[list_of_unique_products[i]]).toFixed(2) +
      "</td>" +
      "</tr>";
    $("#cart_display > tbody").append(newrow);
  }
  // and then we display the final total price of the cart.
  var finalrow =
    "<tr><td>--</td><td><b style='color:red'>TOTAL:</b></td><td><b style='color:red'>" +
    parseFloat(price).toFixed(2) +
    "</b></td></tr>";
  $("#cart_display > tbody").append(finalrow);
});
