function goToDetail(name, image) {
    const url = `produktdetail.html?name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}`;
    window.location.href = url;
  }
  