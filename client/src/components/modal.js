export default class Modal {
  constructor() {
    this.modalElement = document.getElementById("citySelector");
    this.openButton = document.getElementById("openCitySelectorButton");
    this.homeCitySelect = document.getElementById("homeCity");
    this.otherCitiesSelect = document.getElementById("otherCities");

    // Bind methods to the instance to make 'this' refer to the class instance
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.closeOnEscape = this.closeOnEscape.bind(this);
    this.submitSelection = this.submitSelection.bind(this);

    // Attach event listeners
    this.openButton.addEventListener("click", this.open);
    this.modalElement
      .querySelector(".closeButton")
      .addEventListener("click", this.close);
  }

  open() {
    this.modalElement.style.display = "flex";
    document.addEventListener("keydown", this.closeOnEscape);
  }

  close() {
    this.modalElement.style.display = "none";
    document.removeEventListener("keydown", this.closeOnEscape);
  }

  closeOnEscape(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  submitSelection() {
    const homeCity = this.homeCitySelect.value;
    const otherCities = Array.from(this.otherCitiesSelect.selectedOptions).map(
      (option) => option.value
    );

    // Perform actions with the selected values (you can replace this with your logic)
    console.log("Home City:", homeCity);
    console.log("Other Cities:", otherCities);

    // Close the modal
    this.close();
  }
}
