alert("main.js loaded successfully");

window.sendSOS = function () {
  alert("SOS button clicked");

  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      alert(`Location: ${lat}, ${lon}`);
    },
    () => {
      alert("Location permission denied");
    }
  );
};