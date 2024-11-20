const todoList = document.getElementById('todo-list');
const chocolateItemInput = document.getElementById('chocolate-item');

// Load saved items from local storage
const loadItems = () => {
    const items = JSON.parse(localStorage.getItem('chocolateOrders')) || [];
    todoList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeItem(index);
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    });
}

// Add new item
const addItem = () => {
    const itemText = chocolateItemInput.value.trim();
    if (itemText) {
        const items = JSON.parse(localStorage.getItem('chocolateOrders')) || [];
        items.push(itemText);
        localStorage.setItem('chocolateOrders', JSON.stringify(items));
        chocolateItemInput.value = '';
        loadItems();
    }
}

// Remove item
const removeItem = (index) => {
    const items = JSON.parse(localStorage.getItem('chocolateOrders')) || [];
    items.splice(index, 1);
    localStorage.setItem('chocolateOrders', JSON.stringify(items));
    loadItems();
}

// Initial load of items
loadItems();


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from reloading
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation check
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Clear the form after submission
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill in all fields.");
    }
});



const reviews = [
    { name: "Alice", text: "Sweet, subtle, and oh-so-soothing — Elaichi Chai is our perfect companion." },
    { name: "Bob", text: "Breathe easy and sip happily — Peppermint Chai is your minty escape." },
    { name: "Charlie", text: "Pure, refreshing, and revitalizing — Green Tea for a healthier, happier us." },
    { name: "Marcus", text: "A warm hug in a cup, with the zesty kick of ginger to awaken your senses." }
];

function displayReviews() {
    const reviewContainer = document.getElementById('review-list');
    reviewContainer.innerHTML = '';
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `<strong>${review.name}:</strong> ${review.text}`;
        reviewContainer.appendChild(reviewElement);
    });
}

document.getElementById('add-review').addEventListener('click', () => {
    const randomReview = reviews[Math.floor(Math.random() * reviews.length)];
    reviews.push(randomReview);
    displayReviews();
});
