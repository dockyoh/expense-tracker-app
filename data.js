import { validateForm } from "./validation.js";
import { inputAmount, inputDescription } from "./main.js";

export let expensesList = JSON.parse(localStorage.getItem("expenses")) || [];

export function addExpenses(addAmount, addCategory, addDescription) {
  if (validateForm(addAmount, addCategory, addDescription)) {
    expensesList.push({
      amount: addAmount,
      category: addCategory,
      description: addDescription,
    });

    inputAmount.value = "";
    inputDescription.value = "";
  }
}

export function saveData() {
  localStorage.setItem("expenses", JSON.stringify(expensesList));
}

export function deleteExpense(expenseId) {
  console.log(`DELETE: ${typeof expenseId}`);
  expensesList.splice(Number(expenseId), 1);
}
