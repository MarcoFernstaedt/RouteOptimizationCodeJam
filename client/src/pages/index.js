import "../pages/index.css";
import { FormHandler } from '../components/form.js'
import { formSelectors } from "../utils/constants.js";

// Ensure the DOM has loaded
document.addEventListener("DOMContentLoaded", () => {
  // Instantiate the FormHandler
  const formHanlder = new FormHandler(formSelectors.form, formSelectors.startCity, formSelectors.destinationCities, formSelectors.algo);
});
