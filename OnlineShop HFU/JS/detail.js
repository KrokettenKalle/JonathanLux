const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("name");
const productImage = urlParams.get("image");

if (productName && productImage) {
  document.getElementById("product-name").innerText = productName;
  document.getElementById("product-image").src = productImage;
}

function addToCart() {
  let name = document.getElementById("product-name").innerText;
  let image = document.getElementById("product-image").src;
  let size = document.getElementById("size").value;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, image, size });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " in Größe " + size + " wurde zum Warenkorb hinzugefügt!");
}
