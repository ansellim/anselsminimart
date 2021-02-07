if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(function (registration) {
      console.log(
        "Service Worker registration successful; scope of service worker is:",
        registration.scope
      );
    })
    .catch(function (error) {
      console.log("Service worker registration failed, error:", error);
    });
}
