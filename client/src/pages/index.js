import "../pages/index.css";

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  const startCity = document.querySelector('#start-city').value
  const destCities = document.getElementById('destinations');
  const algos = document.getElementById('algos').value

  // Get the selected options
  const distCitiesArray= Array.from(destCities.selectedOptions).map(option => option.value);

  // Create an object with the form data
  const formData = {
    start: startCity,
    dist: distCitiesArray,
    algo: algos,
  };

  fetch('http://localhost:3001/submit-form', {
    method: 'POST', // Use the POST method
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Response from server:', data);
    // Handle the response as needed
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors
  });
});
