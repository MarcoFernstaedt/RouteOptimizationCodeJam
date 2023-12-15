import "../pages/index.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const startCity = document.getElementById('start-city').value
  const destinationCities = document.getElementById('destinations').value
  const algos = document.getElementById('algos').value

  console.log(startCity)
  console.log(destinationCities)
  console.log(algos)
})