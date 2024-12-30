/** 
 * File: controller/navbar.js
 * Author: Neha Balotia
 * Description: This file contains Logical Part to control Navbar.
 * Created on: 30/12/2024
 * Last Modified: 30/12/2024
*/

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
} 