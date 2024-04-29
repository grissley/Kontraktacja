function checkLogin(event) {
  event.preventDefault();

  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  if (login === "aaa" && password === "bbb") {
    window.location.href = "kontraktacja.html";
  } else {
    alert("Coś poszło nie tak, spróbuj ponownie.");
  }
}

// Get the buttons with the .button-size class
const buttons = document.querySelectorAll(".button-size");

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the text content of the clicked button
    const text = button.textContent;

    // Create a new list item element
    const li = document.createElement("li");
    li.textContent = text;

    // Create a button to subtract
    const minusButton = document.createElement("button");
    minusButton.textContent = "-";
    minusButton.addEventListener("click", () => {
      inputField.value = parseInt(inputField.value) - 1;
      if (parseInt(inputField.value) === 0) {
        orderingList.removeChild(li);
        button.disabled = false;
        button.style.backgroundColor = "";
        minusButton.disabled = false;

        // Re-enable the button with the same text content when the corresponding li item is removed
        const sameTextButtons = document.querySelectorAll(
          `.button-size:not([data-disabled])[data-text="${text}"]`
        );
        sameTextButtons.forEach((btn) => {
          btn.disabled = false;
          btn.style.backgroundColor = "";
          btn.style.pointerEvents = "auto";
        });
      }
    });

    // Create an input field with default value 1
    const inputField = document.createElement("input");
    inputField.type = "integer";
    inputField.value = 1;

    // Create a button to add
    const plusButton = document.createElement("button");
    plusButton.textContent = "+";
    plusButton.addEventListener("click", () => {
      inputField.value = parseInt(inputField.value) + 1;
    });

    // Append the elements to the list item
    li.appendChild(minusButton);
    li.appendChild(inputField);
    li.appendChild(plusButton);

    // Get the ordering list section
    const orderingList = document.querySelector(".ordering-list");

    // Add the new list item to the ordering list
    orderingList.appendChild(li);

    // Disable the clicked button
    button.disabled = true;
    button.setAttribute("data-disabled", "true");

    // Change the background color of the clicked button to #806f6d
    button.style.backgroundColor = "#806f6d";

    // Disable the hover effect
    button.style.pointerEvents = "none";

    // Re-enable the button when the corresponding li item is removed
    li.addEventListener("DOMNodeRemoved", () => {
      button.disabled = false;
      button.style.backgroundColor = "";
      button.style.pointerEvents = "auto";
      button.removeAttribute("data-disabled");
    });
  });
});
