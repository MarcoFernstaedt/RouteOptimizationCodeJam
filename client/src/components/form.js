export class FormHandler {
  constructor(formId, startCityId, destId, algosId) {
    this.form = document.querySelector(formId);
    this.startCity = document.getElementById(startCityId);
    this.destinationCities = document.getElementById(destId);
    this.algos = document.getElementById(algosId);

    // Add event listener to form submission
    this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
  }

  getSelectedOptions() {
    return Array.from(this.destinationCities.selectedOptions).map(
      (option) => option.value
    );
  }

  async handleFormSubmit(event) {
    try {
      event.preventDefault(); // Prevent default form submission

      // Get selected cities
      const destinationCitiesArray = this.getSelectedOptions();

      // Create form data
      const formData = {
        start: this.startCity.value,
        dest: destinationCitiesArray,
        algo: this.algos.value,
        // Add other form fields as needed
      };

      // Send the form data to the backend
    //   const response = await fetch("http://localhost:3001/submit-form", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log("Response from server:", data);
    //     // Handle the response data as needed
    //   } else {
    //     console.error("Server error:", response.statusText);
    //     // Handle server errors
    //   }
      console.log(formData)
    } catch (error) {
      console.error("Error:", error);
      // Handle other errors
    }
  }
}
