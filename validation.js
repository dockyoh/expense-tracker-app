const amountLabel = document.getElementById("amount-label");
const categoryLabel = document.getElementById("category-label");
const descLabel = document.getElementById("description-label");

export function validateForm(inputAmount, inputCategory, inputDescription) {
  if (inputAmount === "NaN" || !inputCategory || !inputDescription) {
    if (inputAmount === "NaN") {
      showErrorTemporarily(amountLabel, "AMOUNT REQUIRED!", 3);
    }
    if (!inputCategory) {
      showErrorTemporarily(categoryLabel, "CATEGORY REQUIRED!", 3);
    }
    if (!inputDescription) {
      showErrorTemporarily(descLabel, "DESCRIPTION REQUIRED!", 3);
    }
    return false;
  } else {
    console.log("Form successfully submitted");
    return true;
  }
}

function showErrorTemporarily(element, message, seconds) {
  const pEl = document.createElement("p");

  pEl.classList.add("empty-value-error");
  pEl.textContent = message;

  element.appendChild(pEl);

  setTimeout(() => {
    pEl.remove();
  }, seconds * 1000);
}
