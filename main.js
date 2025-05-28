import { validateForm } from "./validation.js";
import { renderList } from "./render-list.js";
import { addExpenses, deleteExpense, saveData, expensesList } from "./data.js";
import { convert2Decimal } from "./utilities.js";

export const inputAmount = document.getElementById("amount");
export const inputCategory = document.getElementById("category");
export const inputDescription = document.getElementById("description");

renderList();
renderDeleteButton();
console.log(expensesList);

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = convert2Decimal(inputAmount.value);
  console.log(`MAIN: ${typeof amount}`);
  console.log(`MAIN: ${amount}`);

  addExpenses(amount, inputCategory.value, inputDescription.value);
  saveData();
  renderList();
  renderDeleteButton();
});

function renderDeleteButton() {
  document.querySelectorAll(".bin-icon").forEach((deleteBin) => {
    deleteBin.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(deleteBin.className);
      console.log(deleteBin.dataset.listIndex);
      console.log(deleteBin);
      deleteExpense(deleteBin.dataset.listIndex);
      saveData();
      renderList();
      console.log(expensesList);
      renderDeleteButton();
    });
  });
}
