import "../pages/index.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const startCity = document.getElementById("start-city").value;
  const destinationCities = document.getElementById("destinations").value;
  const algo = document.getElementById("algos").value;

  const formData = {
    start: startCity,
    dest: destinationCities,
    algo: algo,
  };

  fetch("http://localhost:3001/submit-form")
    .then((res) => {
      if (res.ok === true) {
        res.json();
      }
    })
    .catch((error) => console.error(error));
});
