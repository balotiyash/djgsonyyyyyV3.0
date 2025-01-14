/** 
 * File: controller/navbar.js
 * Author: Neha Balotia, Yash Balotiya
 * Description: This file contains Logical Part to control Navbar also security measures required accross shared pages.
 * Created on: 30/12/2024
 * Last Modified: 14/01/2025
*/

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// Function to open AlgoDevs Profile in footer
document.getElementById('algodevs-h1').addEventListener('click', () => {
    window.open('https://balotiyash.github.io/Personal-Portfolio/', '_blank');
});

// Function to handle Book Now Button in footer
document.getElementById('book-now-btn').addEventListener('click', () => {
    window.open('https://wa.me/919769794670', '_blank');
});

// Dev Info
console.log('Developed by AlgoDevs - Yash Balotiya');
console.log('https://balotiyash.github.io/Personal-Portfolio/');

// Prevent Right Click
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

// Prevent F12 and other developer tools keys (Ctrl+Shift+I, Ctrl+U, etc.)
document.addEventListener('keydown', function (event) {
    // Prevent F12 key
    if (event.keyCode == 123) { // F12
        event.preventDefault();
        return false;
    }

    // Prevent Ctrl+U (view source)
    if (event.ctrlKey && event.keyCode == 85) { // Ctrl + U
        event.preventDefault();
        return false;
    }

    // Prevent Ctrl+Shift+I (DevTools)
    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Ctrl + Shift + I
        event.preventDefault();
        return false;
    }

    // Prevent F12 (DevTools) with other keys combinations
    if (event.keyCode == 123) { // F12 key
        event.preventDefault();
    }
});
