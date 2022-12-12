"use strict";

// Selectors
const addItemInputField = document.querySelector("#add-item-input-field");
const addItemAisleSelect = document.querySelector("#add-item-aisle-select");
const addItemButton = document.querySelector("#add-item-button");
const toBuyAisleSelect = document.querySelector("#to-buy-aisle-select");
const toBuyList = document.querySelector("#to-buy-list");

// Event listeners
addItemButton.addEventListener("click", addItemToBuy);
toBuyAisleSelect.addEventListener("click", toBuyAisleSort);

// Functions
function addItemToBuy(e) {
  e.preventDefault();

  // Create an element to add
  const toBuyElementObject = {
    elementName: addItemInputField.value,
    elementAisle: addItemAisleSelect.value,
  };

  // Store the element in the local storage
  let toBuyListStored;
  if (!localStorage.getItem("toBuyListStored")) {
    toBuyListStored = [];
  } else {
    toBuyListStored = JSON.parse(localStorage.getItem("toBuyListStored"));
  }
  toBuyListStored.push(toBuyElementObject);
  localStorage.setItem("toBuyListStored", JSON.stringify(toBuyListStored));

  // Add the element to the page
  const toBuyElementLi = document.createElement("li");
  toBuyElementLi.classList.add(toBuyElementObject.elementAisle);
  const toBuyElementP = document.createElement("p");
  const toBuyElementButton = document.createElement("button");
  toBuyElementButton.innerText = "Done";
  toBuyElementP.innerHTML = `${toBuyElementObject.elementName} <span class="aisle">(${toBuyElementObject.elementAisle})</span>`;
  toBuyElementLi.appendChild(toBuyElementP);
  toBuyElementLi.appendChild(toBuyElementButton);
  toBuyList.appendChild(toBuyElementLi);
}

function toBuyAisleSort(e) {
  const toBuyListElements = toBuyList.childNodes;
  toBuyListElements.forEach((element) => {
    switch (e.target.value) {
      case "all":
        element.style.display = "flex";
        break;
      case "beverage":
        if (element.classList.contains("beverage")) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
        break;
      case "bread":
        if (element.classList.contains("bread")) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
        break;
      case "candy":
        if (element.classList.contains("candy")) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
        break;
      case "canned":
        if (element.classList.contains("canned")) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
        break;
      case "cleaning":
        if (element.classList.contains("cleaning")) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
        break;
      case "diary":
        if (element.classList.contains("diary")) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
        break;
      case "fruit":
        if (element.classList.contains("fruit")) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
        break;
      case "personal-care":
        if (element.classList.contains("personal-care")) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
        break;
      case "vegetable":
        if (element.classList.contains("vegetable")) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
        break;
    }
  });
}
