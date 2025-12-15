const form = document.getElementById('expense-form');
const nameInput = document.getElementById('expense-name');
const amountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalElement = document.getElementById('total');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let editId = null;

document.addEventListener('DOMContentLoaded', renderExpenses);

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);

  if (editId) {
    expenses = expenses.map(exp =>
      exp.id === editId ? { ...exp, name, amount } : exp
    );
    editId = null;
    form.querySelector('button').textContent = 'Add Expense';
  } else {
    expenses.push({
      id: Date.now(),
      name,
      amount
    });
  }

  saveAndRender();
  form.reset();
});

function renderExpenses() {
  expenseList.innerHTML = '';
  let total = 0;

  expenses.forEach(expense => {
    total += expense.amount;

    const li = document.createElement('li');
    li.innerHTML = `
      <span>${expense.name} - ₹${expense.amount}</span>
      <div class="actions">
        <button class="edit-btn" onclick="editExpense(${expense.id})">Edit</button>
        <button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button>
      </div>
    `;
    expenseList.appendChild(li);
  });

  totalElement.textContent = total;
}

function editExpense(id) {
  const expense = expenses.find(exp => exp.id === id);
  nameInput.value = expense.name;
  amountInput.value = expense.amount;
  editId = id;
  form.querySelector('button').textContent = 'Update Expense';
}

function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
  renderExpenses();
}
