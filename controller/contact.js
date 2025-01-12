/** 
 * File: controller/contact.js
 * Author: Yash Balotiya
 * Description: This file contains Logical Part to handle contact us page.
 * Created on: 11/01/2025
 * Last Modified: 12/01/2025
*/

// Setting the isLoggedIn to false by default
window.localStorage.setItem('isLoggedIn', 'false');

// Function to handle the form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbxXyyICams7o_ww_o7lV_tPDj_YGxvmRKbMEkNv6HVsA9z8G1guM-4aJMjIn3YLxty5/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()

    const phone = document.getElementById("phone").value;

    // Checking the phone number is valid or not using regex
    if (!/^[6-9]\d{9}$/.test(phone)) {
        // msg.innerHTML = "Please Enter a Valid Phone Number!!"
        // setTimeout(function () {
        //     msg.innerHTML = ""
        // }, 5000)
        alert("Please Enter a Valid Phone Number!!")
        return
    }

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully!!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        // .catch(error => console.error('Error!', error.message))
        .catch(error => {
            msg.innerHTML = "Something Went Wrong!!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            console.error('Error!', error.message)
        })
})

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