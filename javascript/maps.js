// A script that shows map as well as directions. This script is used in the maps.html webpage.

// To help myself with writing the code for calculating directions, i referenced the official documentation on
// adapted from https://developers.google.com/maps/documentation/javascript/examples/directions-panel and adapted the code from the Google Maps API documentation.

let map;
let myLat;
let myLng;

// We want to create a map. The map should be centered at the location of the minimart which is at T21 building at Singapore Polytechic
const myLatLng = { lat: 1.3115957122081283, lng: 103.77520417009457 };

function initMap() {
  // Generate map and center it on the location we have chosen.
  console.log("The function initMap() in maps.js has been called");
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var anselMinimart = new google.maps.LatLng(
    1.3115957122081283,
    103.77520417009457
  );
  var mapOptions = {
    zoom: 16,
    center: anselMinimart,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Ansel's Minimart",
  });
  directionsRenderer.setMap(map);
  //Note: i have chosen to display the textual directions BELOW the map in the directions.html webpage.
  directionsRenderer.setPanel(document.getElementById("directionsPanel"));

  // Display the current Location of the user (Latitude, longitude) in the javascript console. This helps with debugging, etc.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      myLat = position.coords.latitude;
      myLon = position.coords.longitude;
      Displaylat_lng(myLat, myLon);
    });
  }

  // Display the current Location of the user (Latitude, longitude) in the javascript console. This helps with debugging, etc.
  function Displaylat_lng(lat, lng) {
    console.log("Lat ==> " + lat + " lng ==> " + lng);
    $("#pos_lat").html(lat);
    $("#pos_lng").html(lng);
  }

  // function to calculate route (using PUBLIC TRANSIT) from user's current location to the minimart, and then display this output graphically as well as in textual directions that are displayed below the actual map.
  function calcRoute() {
    var start = originLatitude + "," + originLongitude;
    console.log(originLatitude);
    console.log(originLongitude);
    var end = "500 Dover Rd, Singapore"; // "1.3115957122081283,  103.77520417009457";
    var request = {
      origin: start,
      destination: end,
      travelMode: "TRANSIT",
    };
    directionsService.route(request, function (response, status) {
      if (status == "OK") {
        directionsRenderer.setDirections(response);
      }
    });
  }

  // when user clicks on button, then we retrieve user's current latitude and longitude which we store in hidden html tags (as a workaround of the problem of asynchronous javascript and the problematic issues of callback functions) and then calculate the route from current location to the minimart location.

  var originLatitude;
  var originLongitude;

  $("#btn").on("click", function () {
    originLatitude = $("#pos_lat").html();
    originLongitude = $("#pos_lng").html();
    calcRoute();
  });
}
