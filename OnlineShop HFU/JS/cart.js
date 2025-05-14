function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Warenkorb ist leer.</p>";
      return;
    }
  
    cart.forEach((item, index) => {
      let div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <span>${item.name} - Größe: ${item.size}</span>
        <button onclick="removeFromCart(${index})">Entfernen</button>
      `;
      cartContainer.appendChild(div);
    });
  }
  
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
  
  function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
  }
  
  function checkout() {
    alert("Weiter zur Kasse (noch nicht implementiert)");
  }
  
  window.onload = loadCart;
  