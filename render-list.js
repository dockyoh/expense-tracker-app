import { expensesList } from "./data.js";
import { formatCurrency } from "./utilities.js";

export function renderList() {
  let totalAmount = 0;
  const tbodyEl = document.querySelector("tbody");
  const totalEl = document.getElementById("js-total");
  tbodyEl.innerHTML = "";

  expensesList.forEach((expenses, index) => {
    totalAmount += Number(expenses.amount);
    console.log(`RENDER LIST: ${typeof Number(expenses.amount)}`);

    const trEl = document.createElement("tr");
    const amountData = document.createElement("td");
    const categoryData = document.createElement("td");
    const descData = document.createElement("td");
    const deleteIcon = document.createElement("img");

    descData.textContent = expenses.description;
    categoryData.textContent = expenses.category;
    amountData.textContent = expenses.amount;
    deleteIcon.src = "assets/bin.png";
    deleteIcon.alt = "trash bin icon for delete";
    deleteIcon.classList.add("bin-icon");
    deleteIcon.dataset.listIndex = index;

    trEl.appendChild(descData);
    trEl.appendChild(categoryData);
    trEl.appendChild(amountData);
    amountData.appendChild(deleteIcon);

    tbodyEl.appendChild(trEl);
  });
  console.log(`TOTAL AMOUNT: ${totalAmount}`);
  totalEl.textContent = `${formatCurrency(totalAmount)}`;
}
