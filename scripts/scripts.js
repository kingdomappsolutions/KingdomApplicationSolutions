"use strict"

// Handle hamburger navigation
document.addEventListener('DOMContentLoaded', () => {

	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
  
	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
  
        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
    
                // Get the target from the "data-target" attribute
                const target = el.dataset.target
                const $target = document.getElementById(target)
        
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active')
                $target.classList.toggle('is-active')
    
            })
        })
	}
})

// Clear contact form
const clearForm = () => {
	document.getElementById("contactForm").reset()
}

// Redirect to contact page
const redirect = () => {
	setTimeout(function redirect() {
		location.href = "https://kingdomappsolutions.tech/contact.html"
	 }, 5000)
}

// Randomize contact form valid checks
const validate = () => {
    const validateArray = [
        "What is 4 + 9? (number only)",
        "What is 5 + 7? (number only)",
        "What is the first letter in the word 'dog'?",
        "How many stars are on the American flag? (number only)",
        "What is 8 + 8? (number only)",
        "What is the second letter in the word 'pharmacy'?",
        "What is 10 - 4? (number only)",
        "What is 19 - 0? (number only)",
        "What is the last letter in the word 'ocean'?",
        "How many thumbs are on two hands? (number only)"
    ]
    const arrayChoice = Math.floor(Math.random() * validateArray.length)

    document.getElementById("validateLabel").innerHTML = validateArray[arrayChoice]
}