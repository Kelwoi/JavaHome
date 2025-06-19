const container = document.getElementById('product-container');

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    data.products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Rating:</strong> ${product.rating}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    container.innerHTML = '<p>Error loading products.</p>';
    console.error('Fetch error:', error);
  });
