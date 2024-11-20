const products = [
    { name: 'Elachi Chai', flavor: 'Elachi Chai', price: 3.5, rating: 4.8, image: './images/elaichi.webp' },
    { name: 'Masala Tea', flavor: 'Masala Tea', price: 3.0, rating: 4.6, image: './images/Masala.jpg' },
    { name: 'Classic Chai', flavor: 'Classic Chai', price: 3.2, rating: 4.7, image: './images/classic.jpg' },
    { name: 'Ginger Tea', flavor: 'Ginger Tea', price: 3.8, rating: 4.5, image: './images/ginger.webp' },
    { name: 'Tandoori Chai', flavor: 'Tandoori Chai', price: 3.5, rating: 4.4, image: './images/tandoori.webp' },
    { name: 'Green Tea', flavor: 'Green Tea', price: 4.0, rating: 4.9, image: './images/green.jpg' },
    { name: 'Black Tea', flavor: 'Black Tea', price: 3.9, rating: 4.3, image: './images/black.jpg' },
    { name: 'Pepermint Tea', flavor: 'Pepermint Tea', price: 4.5, rating: 4.2, image: './images/Peppermint.jpg' },
    { name: 'Match Tea', flavor: 'Match Tea', price: 3.7, rating: 4.8, image: './images/Matcha.jpg' },
    { name: 'Oolong Tea', flavor: 'Oolong Tea', price: 4.2, rating: 4.7, image: './images/Oolong.webp' },
    
];

function displayProducts(productsToDisplay) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Flavor: ${product.flavor}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Rating: ${product.rating.toFixed(2)} ⭐</p>
        `;
        productContainer.appendChild(productElement);
    });
}

function filterAndSortProducts() {
    const flavor = document.getElementById('flavorFilter').value;
    const sortPrice = document.getElementById('sortPrice').value;
    const sortRating = document.getElementById('sortRating').value;

    // Filter by flavor
    let filteredProducts = flavor === 'all'
        ? products
        : products.filter(product => product.flavor === flavor);

    // Sort by price
    if (sortPrice === 'low-to-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortPrice === 'high-to-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Sort by rating
    if (sortRating === 'high-to-low') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortRating === 'low-to-high') {
        filteredProducts.sort((a, b) => a.rating - b.rating);
    }

    displayProducts(filteredProducts);
}

// Event listeners for filters and sorting
document.getElementById('flavorFilter').addEventListener('change', filterAndSortProducts);
document.getElementById('sortPrice').addEventListener('change', filterAndSortProducts);
document.getElementById('sortRating').addEventListener('change', filterAndSortProducts);

// Initial display
displayProducts(products);
