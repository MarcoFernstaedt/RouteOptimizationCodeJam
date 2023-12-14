import Popup from "../components/modal";

const selectorModal = new Popup("#city-selector-form");

const selectorButton = document.querySelector(".selector-button");
selectorButton.addEventListener("click", () => {
  console.log("button has been clicked");
});

function loadData() {
  const selectedValue = document.getElementById("itemSelect").value;
  const apiUrl = `https://jsonplaceholder.typicode.com/${selectedValue}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => displayData(data))
    .catch((error) => console.error("Error fetching data:", error));
}

function displayData(data) {
  const dataList = document.getElementById("dataList");
  dataList.innerHTML = ""; // Clear previous data

  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = JSON.stringify(item);
    dataList.appendChild(listItem);
  });
}

// Initial data load
// loadData();
