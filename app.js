"use strict";

// Local storage setup
if (!localStorage.getItem("toBuyListStored")) {
  localStorage.setItem("toBuyListStored", JSON.stringify([]));
}
if (!localStorage.getItem("recentlyBoughtListStored")) {
  localStorage.setItem("recentlyBoughtListStored", JSON.stringify([]));
}

// Selectors
const addItemInputField = document.querySelector("#add-item-input-field");
const addItemAisleSelect = document.querySelector("#add-item-aisle-select");
const addItemButton = document.querySelector("#add-item-button");
const toBuyAisleSelect = document.querySelector("#to-buy-aisle-select");
const toBuyList = document.querySelector("#to-buy-list");
const recentlyBoughtList = document.querySelector("#recently-bought-list");

// Event listeners
addItemButton.addEventListener("click", addItemToBuy);
toBuyAisleSelect.addEventListener("click", toBuyAisleSort);
toBuyList.addEventListener("click", toBuyCheckOff);

// Functions
function addItemToBuy(e) {
  e.preventDefault();

  // Create an element to add
  const toBuyElementObject = {
    elementName: addItemInputField.value,
    elementAisle: addItemAisleSelect.value,
  };

  // Store the element in the local storage
  let toBuyListStored = JSON.parse(localStorage.getItem("toBuyListStored"));
  toBuyListStored.push(toBuyElementObject);
  localStorage.setItem("toBuyListStored", JSON.stringify(toBuyListStored));

  // Add the element to the "To buy" list
  const toBuyElementLi = document.createElement("li");
  toBuyElementLi.classList.add(toBuyElementObject.elementAisle);
  const toBuyElementP = document.createElement("p");
  const toBuyElementButton = document.createElement("button");
  toBuyElementButton.classList.add("check-mark-button");
  toBuyElementButton.innerText = "Done";
  toBuyElementP.innerHTML = `${toBuyElementObject.elementName} <span class="aisle">(${toBuyElementObject.elementAisle})</span>`;
  toBuyElementLi.appendChild(toBuyElementP);
  toBuyElementLi.appendChild(toBuyElementButton);
  toBuyList.appendChild(toBuyElementLi);

  // Clear the input field
  addItemInputField.value = "";
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

function toBuyCheckOff(e) {
  if (e.target.classList.contains("check-mark-button")) {
    // Get the element name
    const toBuyListElement = e.target.parentElement;
    const elementName = toBuyListElement.children[0].innerText.split(" ")[0];

    // Get the stored lists
    let toBuyListStored = JSON.parse(localStorage.getItem("toBuyListStored"));
    let recentlyBoughtListStored = JSON.parse(
      localStorage.getItem("recentlyBoughtListStored")
    );

    toBuyListStored.every((item) => {
      // Add the element to the "Recently Bought" stored list:
      if (item.elementName === elementName) {
        recentlyBoughtListStored.push(item);
        if (recentlyBoughtListStored.length > 5) {
          recentlyBoughtList.childNodes[
            recentlyBoughtList.childNodes.length - 1
          ].remove();
          recentlyBoughtListStored.shift();
        }
        localStorage.setItem(
          "recentlyBoughtListStored",
          JSON.stringify(recentlyBoughtListStored)
        );
        // Add the element to the "Recently bought" list
        const toBuyElementLi = document.createElement("li");
        toBuyElementLi.classList.add(item.elementAisle);
        const toBuyElementP = document.createElement("p");
        toBuyElementP.innerHTML = `${item.elementName} <span class="aisle">(${item.elementAisle})</span>`;
        toBuyElementLi.appendChild(toBuyElementP);
        recentlyBoughtList.prepend(toBuyElementLi);

        // Remove the element from the "To buy" stored list
        toBuyListStored.splice(toBuyListStored.indexOf(item), 1);
        localStorage.setItem(
          "toBuyListStored",
          JSON.stringify(toBuyListStored)
        );
        return false;
      }
      return true;
    });

    // Remove the element from the list
    toBuyListElement.remove();
  }
}
