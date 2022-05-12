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

// Handle toggle for subscription plan
// const priceToggle = () => {
//     // Get toggle value
//     var value = document.getElementById("toggle")
//     var header = document.getElementById("priceHeader")
//     var label = document.getElementById("priceLabel")
    
//     // Toggle on or off
//     if (value.value == "off") {
//         // Change label
//         document.getElementById("priceLabel").innerHTML = "Monthly Pricing"

//         // Write price
//         document.getElementById("price").innerHTML = "<br><b>$60 per month</b>"

//         // Write card footer
//         var footer = document.getElementById("priceFooter")
//         if (footer != null) {
//             document.getElementById("priceFooter").innerHTML = 
//             "<footer class='card-footer'>" +
//                 "<a class='card-footer-item button card-footer-button-green' color='secondary'" + "href='https://buy.stripe.com/9AQ8Ayg5v2xQ4Jq289' target='_blank'>" + 
//                 "Subscribe!</a>" +
//             "</footer>"
//         }

//         // Set toggle value
//         value.setAttribute("value", "on")

//         // Set header color
//         header.setAttribute("class", "card-header-green")
//     } else {
//         // Change label
//         document.getElementById("priceLabel").innerHTML = "Annual Pricing"

//         // Write price
//         document.getElementById("price").innerHTML = "<b>SAVE 20%" + "</b> <br><b>$48 per month (billed annually)</b>"

//         // Write card footer
//         var footer = document.getElementById("priceFooter")
//         if (footer != null) {
//             document.getElementById("priceFooter").innerHTML = 
//             "<footer class='card-footer'>" +
//                 "<a class='card-footer-item button card-footer-button' color='secondary'" + "href='https://buy.stripe.com/9AQ8Ayg5v2xQ4Jq289' target='_blank'>" +
//                 "Subscribe!</a>" +
//             "</footer>"
//         }

//         // Set toggle value
//         value.setAttribute("value", "off")

//         // Set header color
//         header.setAttribute("class", "card-header")
//     }
// }