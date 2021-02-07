window.onload = function () {
  console.log("Loaded feedback_form.js");
  document
    .getElementById("feedback_form")
    .addEventListener("submit", function () {
      alert("Your form has been submitted");
    });
};
