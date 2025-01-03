/** 
 * File: controller/navbar.js
 * Author: Neha Balotia
 * Description: This file contains Logical Part to control Navbar also security measures required accross shared pages.
 * Created on: 30/12/2024
 * Last Modified: 01/01/2025
*/

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
} 

// Prevent Right Click
// document.addEventListener('contextmenu', event => event.preventDefault());

// Prevent F12
// document.onkeypress = function (event) {
//     event = (event || window.event);
//     if (event.keyCode == 123) {
//         return false;
//     }
// }

// Prevent Ctrl+U
// document.onkeydown = function (event) {
//     event = (event || window.event);
//     if (event.keyCode == 123) {
//         return false;
//     }
// }

// Prevent Ctrl+Shift+I
// document.onkeydown = function (event) {
//     event = (event || window.event);
//     if (event.keyCode == 123) {
//         return false;
//     }
// }

// document.addEventListener('keydown', function (event) {
//     if (event.keyCode == 123) {
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//         return false;
//     } else if (event.ctrlKey && event.keyCode == 85) {
//         return false;
//     }
// });