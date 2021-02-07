// This is a script that makes AJAX call to populate the Products webpage with product information.
// To make this script, i referenced online documentation about XMLHttpRequest() regarding the syntax.

$(document).ready(function () {
  var xhttp = new XMLHttpRequest();

  xhttp.open(
    "GET",
    "https://raw.githubusercontent.com/ansellim/anselsminimart/main/JSON/products.json"
  );
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(
        "AJAX call has been made to load product information onto the webpage. See products-ajax.js for more information. Also see the JSON file which is loaded via AJAX; this JSON file is located on my github but it's also available locally in the JSON subfolder."
      );
      console.log("Loaded products-ajax.js");

      var data = JSON.parse(this.responseText);

      var all_card_titles = document.getElementsByClassName("card-title");

      var all_card_texts = document.getElementsByClassName("card-text");

      var all_card_images = $(".product-listing").find("img");

      //loop through the card titles and texts and images and then populate with the information from the JSON object.

      //card titles
      for (i = 0; i < all_card_titles.length; i++) {
        all_card_titles[i].innerHTML = data[i].name;
      }

      //card texts
      for (i = 0; i < all_card_texts.length; i++) {
        all_card_texts[i].innerHTML = data[i].price;
      }

      //card images
      for (i = 0; i < all_card_images.length; i++) {
        all_card_images[i].src = data[i].photo;
      }
    }
  };
});
