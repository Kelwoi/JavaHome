function createCard(name, imagePath) {
    const card = document.createElement("div");
    card.className = "card";
  
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = name;
  
    const title = document.createElement("h4");
    title.textContent = name;
  
    card.appendChild(img);
    card.appendChild(title);
  
    document.getElementById("product-list").appendChild(card);
  }
  
  document.getElementById("add-apple").addEventListener("click", function () {
    createCard("Apple", "foto/apple.png");
  });
  
  document.getElementById("add-fish").addEventListener("click", function () {
    createCard("Fish", "foto/fish.png");
  });
  
  document.getElementById("add-eggs").addEventListener("click", function () {
    createCard("Eggs", "foto/egg.png");
  });
  