// 1. Console Greeting
console.log("Welcome to the G11 Brand official website!");

// 2. Interactive Inquiry Form
// Grabs the form using the class your partners assigned
const inquiryForm = document.querySelector('.inquiry-form');

if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stops the page from refreshing when clicked
        
        // Grabs the user's name from the first input box
        const nameInput = document.querySelector('.inquiry-form input[type="text"]').value;
        
        // Triggers a custom alert
        alert("Thank you, " + nameInput + "! Your inquiry has been received by the G11 team.");
        
        inquiryForm.reset(); // Clears the form out for the next person
    });
}

// 3. Interactive Product Cards
// Finds every product card and makes it interactive when clicked
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('click', function() {
        // Grabs the specific name and price of the clicked item
        const productName = this.querySelector('h3').innerText;
        const productPrice = this.querySelector('.price, .product-price').innerText;
        
        alert("You selected the " + productName + " for " + productPrice + ". Added to your cart!");
    });
});

// 4. Upcoming Events "Learn More" Buttons
const eventBtns = document.querySelectorAll('.event-btn');

eventBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the link from jumping to the top of the page
        alert("Tickets for this exclusive G11 event will be available soon. Stay tuned!");
    });
});