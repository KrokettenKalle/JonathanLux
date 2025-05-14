
    function openNav() {
      document.getElementById("mySidebar").style.width = "250px";
    }

    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
    }

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
    }, 3000);

    window.addEventListener("resize", updateCarousel);
  




