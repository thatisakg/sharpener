const API_URL = "http://localhost:3000/products";

let products = [];

window.onload = fetchProducts;

async function fetchProducts() {
  try {
    const response = await axios.get(API_URL);
    products = response.data;
    renderProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}


async function addToShop() {
  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const quantity = Number(document.getElementById("quantity").value);

  if (!name || price <= 0 || quantity <= 0) {
    alert("Invalid input");
    return;
  }

  const newProduct = { name, price, quantity };

  try {
    const response = await axios.post(API_URL, newProduct);
    products.push(response.data);
    renderProducts();
    clearInputs();
  } catch (error) {
    console.error("Error adding product:", error);
  }
}

async function buyProduct(id) {
  const product = products.find(p => p.id === id);
  const qty = Number(document.getElementById(`buy-${id}`).value);

  if (!qty || qty > product.quantity) {
    alert("Invalid quantity");
    return;
  }

  const updatedProduct = {
    ...product,
    quantity: product.quantity - qty
  };

  try {
    await axios.put(`${API_URL}/${id}`, updatedProduct);
    fetchProducts();
  } catch (error) {
    console.error("Error updating product:", error);
  }
}

async function deleteProduct(id) {
  try {
    await axios.delete(`${API_URL}/${id}`);
    fetchProducts();
  } catch (error) {
    console.error("Error deleting product:", error);
  }
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

  document.getElementById("total").innerText = products.length;
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
}
