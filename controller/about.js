/** 
 * File: controller/about.js
 * Author: Yash Balotiya
 * Description: This file contains Logical Part to handle about me page.
 * Created on: 10/01/2025
 * Last Modified: 11/01/2025
*/

// Setting the isLoggedIn to false by default
window.localStorage.setItem('isLoggedIn', 'false');

// Animation for counting numbers
const counters = document.querySelectorAll('.value');
const speed = 200;

// Function to animate counters
const animateCounter = (counter) => {
    const value = +counter.getAttribute('akhi');
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(() => animateCounter(counter), 1);
    } else {
        counter.innerText = value;
    }
};

// Intersection Observer to detect when the section is in view for counters
const countersObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the section is visible in the viewport
        if (entry.isIntersecting) {
            // Start the counter animation for all counters in the section
            entry.target.querySelectorAll('.value').forEach(counter => animateCounter(counter));
            countersObserver.unobserve(entry.target); // Stop observing once the animation has started
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is in view

// Observe the section containing the counters (use appropriate section class or ID)
const countersSection = document.querySelector('.content'); // Replace with your section's selector
countersObserver.observe(countersSection);


// Animation for divs (work cards and college events)
const divsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // When the section is in the viewport (threshold 0.5 means 50% of the section is visible)
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class to trigger animation
            divsObserver.unobserve(entry.target); // Stop observing after it has been animated
        }
    });
}, { threshold: 0 }); // You can adjust this threshold to control when the animation starts

// Select all workCard and collegeEventsDiv elements
const workCards = document.querySelectorAll('.workCard');
const collegeEventsDivs = document.querySelectorAll('.collegeEventsDiv');

// Observe each section to trigger the animation when it enters the viewport
workCards.forEach(card => divsObserver.observe(card));
collegeEventsDivs.forEach(div => divsObserver.observe(div));

// Function to handle the Facebook
document.getElementById("facebookIcon").addEventListener("click", function () {
    window.open("https://www.facebook.com/DJGSONYYYYY/", "_blank");
});

// Function to handle the Instagram
document.getElementById("instagramIcon").addEventListener("click", function () {
    window.open("https://www.instagram.com/djgsonyyyyy/", "_blank");
});

// Function to handle the Youtube
document.getElementById("youtubeIcon").addEventListener("click", function () {
    window.open("https://www.youtube.com/@djgsonyyyyy?sub_confirmation=1", "_blank");
});

// Function to handle the Whatsapp
document.getElementById("whatsappIcon").addEventListener("click", function () {
    window.open("https://wa.me/919769794670", "_blank");
});