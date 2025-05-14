function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

  function renderSidebar() {
    const sidebarHTML = `
      <div id="mySidebar" class="sidebar">
        <span class="closebtn" onclick="closeNav()">×</span>
        <a href="Online Shop.html#muetze">Hats</a>
        <a href="Online Shop.html#tshirt">Oberteile</a>
        <a href="Online Shop.html#hose">Hosen</a>
        <a href="Online Shop.html#schuhe">Schuhe</a>
        <a href="Online Shop.html#schmuck">Schmuck</a>
      </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", sidebarHTML);
  }
  
  window.addEventListener("DOMContentLoaded", renderSidebar);
  
  
  function filterProducts() {
    let input = document.getElementById("search").value.toLowerCase();
    let products = document.querySelectorAll(".product");
  
    products.forEach(product => {
      let name = product.innerText.toLowerCase();
      if (name.includes(input)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }
  
  let currentIndex = 0;
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-track img");
  
  function moveSlide(step) {
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    updateCarousel();
  }
  
  function updateCarousel() {
    const width = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
  }
  
  setInterval(() => {
    moveSlide(1);
  }, 6000);
  
  window.addEventListener("resize", updateCarousel);