let products = JSON.parse(localStorage.getItem("products")) || [];
let totalItems = products.length;

renderProducts();

function addToShop() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  if (!name || price <= 0 || quantity <= 0) {
    alert("Please enter valid values");
    return;
  }

  products.push({
    id: Date.now(),
    name,
    price: Number(price),
    quantity: Number(quantity)
  });

  totalItems++;
  saveToLocalStorage();
  renderProducts();
  clearInputs();
}

function renderProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${p.name} — Rs:${p.price} — ${p.quantity} KG</span>
      <input type="number" min="1" id="buy-${p.id}">
      <button class="buy-btn" onclick="buyProduct(${p.id})">Buy</button>
      <button class="delete-btn" onclick="deleteProduct(${p.id})">Delete</button>
    `;
    list.appendChild(li);
  });

  document.getElementById("total").innerText = totalItems;
}

function buyProduct(id) {
  const product = products.find(p => p.id === id);
  const qty = Number(document.getElementById(`buy-${id}`).value);

  if (!qty || qty > product.quantity) {
    alert("Invalid quantity");
    return;
  }

  product.quantity -= qty;

  if (product.quantity === 0) {
    deleteProduct(id);
    return;
  }

  saveToLocalStorage();
  renderProducts();
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  totalItems--;
  saveToLocalStorage();
  renderProducts();
}

function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
}
