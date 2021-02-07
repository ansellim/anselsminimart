let map;
let myLat;
let myLng;
const myLatLng = { lat: 1.3115957122081283, lng: 103.77520417009457 };

// adapted from https://developers.google.com/maps/documentation/javascript/examples/directions-panel.

function initMap() {
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
  directionsRenderer.setPanel(document.getElementById("directionsPanel"));

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      myLat = position.coords.latitude;
      myLon = position.coords.longitude;
      //console.log(myLat); //This shows me the latitude
      Displaylat_lng(myLat, myLon);
    });
  }

  function Displaylat_lng(lat, lng) {
    console.log("Lat ==> " + lat + " lng ==> " + lng);
    $("#pos_lat").html(lat);
    $("#pos_lng").html(lng);
  }

  var originLatitude;
  var originLongitude;

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

  $("#btn").on("click", function () {
    originLatitude = $("#pos_lat").html();
    originLongitude = $("#pos_lng").html();
    calcRoute();
  });
}
