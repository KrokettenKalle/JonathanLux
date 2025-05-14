function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("src", ev.target.src);
    ev.dataTransfer.setData("type", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    const src = ev.dataTransfer.getData("src");
    const type = ev.dataTransfer.getData("type");
  
    const zoneMap = {
      tshirt: "shirt-zone",
      pants: "pants-zone",
      hat: "hat-zone",
      shoes: "shoes-zone",
      bracelet: "bracelet-zone"
    };
  
    const zoneId = zoneMap[type];
    if (zoneId) {
      const zone = document.getElementById(zoneId);
      zone.innerHTML = `<img src="${src}" alt="${type}">`;
      saveOutfit();
    }
  }
  
  function saveOutfit() {
    const outfit = {
      shirt: document.getElementById("shirt-zone").innerHTML,
      pants: document.getElementById("pants-zone").innerHTML,
      hat: document.getElementById("hat-zone").innerHTML,
      shoes: document.getElementById("shoes-zone").innerHTML,
      bracelet: document.getElementById("bracelet-zone").innerHTML
    };
    localStorage.setItem("outfit", JSON.stringify(outfit));
  }
  
  function loadOutfit() {
    const data = JSON.parse(localStorage.getItem("outfit"));
    if (data) {
      document.getElementById("shirt-zone").innerHTML = data.shirt || "";
      document.getElementById("pants-zone").innerHTML = data.pants || "";
      document.getElementById("hat-zone").innerHTML = data.hat || "";
      document.getElementById("shoes-zone").innerHTML = data.shoes || "";
      document.getElementById("bracelet-zone").innerHTML = data.bracelet || "";
    }
  }
  
  function resetOutfit() {
    const zones = ["shirt-zone", "pants-zone", "hat-zone", "shoes-zone", "bracelet-zone"];
    zones.forEach(id => document.getElementById(id).innerHTML = "");
    localStorage.removeItem("outfit");
  }
  
  window.onload = loadOutfit;
  