/* Adapted from tharun shiv's code at https://github.com/tharunShiv/stick-it-notes*/

/*
if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}
*/

//This is a script that allows user to make shopping list / free-text notes with title & note content.
//User cannot delete individual notes, but user can delete all notes by clicking on a button on the webpage.

var myList = [];

let count = Number(window.localStorage.getItem("count"));

if (!count) {
  window.localStorage.setItem("count", "0");
  // window.localStorage.setItem("notes","");
}

$(document).ready(function () {
  console.log("Loaded shoppinglist.js");
  $("#inputForm").submit(function (event) {
    alert("Form was submitted");
    window.localStorage.setItem(
      "count",
      String(parseInt(window.localStorage.getItem("count")) + 1)
    );
    var current_count = window.localStorage.getItem("count");
    var input_title = document.getElementById("new-note-title-input").value;
    var input_body = document.getElementById("new-note-body-input").value;
    var input_array = [input_title, input_body];
    window.localStorage.setItem(current_count, JSON.stringify(input_array));
  });

  if (parseInt(localStorage.getItem("count")) > 0) {
    $("#no-notes").css("visibility", "hidden");
    $("#have-notes").css("visibility", "visible");
    $("#notesDisplay").css("visibility", "visible");
    $("#delete_all_notes_button_enclosing_container").css(
      "visibility",
      "visible"
    );
  }

  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != "count") {
      var mynote = localStorage.getItem(localStorage.key(i));
      var noteContents = JSON.parse(mynote);
      var noteTitle = noteContents[0];
      var noteBody = noteContents[1];
      var noteAsString =
        "<tr><td>" + noteTitle + "</td><td>" + noteBody + "</td></tr>";
      $("#notesDisplay>tbody").append(noteAsString);
      $("#notesdisplaylist").append("<li>" + noteTitle + "</li>");
      $("#notesdisplaylist").append("<li>" + noteBody + "</li>");
    }
  }

  $("#delete_all_notes_button").click(function () {
    console.log("Delete all notes button was clicked");
    var number_of_notes = parseInt(localStorage.getItem("count"));
    for (i = 1; i <= number_of_notes; i++) {
      localStorage.removeItem(String(i));
    }

    localStorage.setItem("count", "0");

    $("#notesDisplay").html(
      "<thead><tr><th>Title</th><th>Note</th></tr></thead><tbody></tbody>"
    );

    $("#no-notes").css("visibility", "visible");
    $("#have-notes").css("visibility", "hidden");
    $("#notesDisplay").css("visibility", "hidden");

    $("#delete_all_notes_button_enclosing_container").css(
      "visibility",
      "hidden"
    );
  });
});
