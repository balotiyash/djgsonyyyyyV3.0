/** 
 * File: controller/contact.js
 * Author: Yash Balotiya
 * Description: This file contains Logical Part to handle contact us page.
 * Created on: 11/01/2025
 * Last Modified: 25/04/2025
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
        alert("Please Enter a Valid Phone Number!!");
        return;
    }

    const subject = "Hello Ganesh, I am interested in your services!";
    const body = `Hello Ganesh, I am interested in your services!\n\nName: ${form.Name.value}\nPhone: ${phone}\n\nMessage: ${msg.value}`;

    // Construct the mailto link
    const mailtoLink = `mailto:ganeshsony94@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default mail client with the constructed link
    window.location.href = mailtoLink;

    // fetch(scriptURL, {
    //     method: 'POST',
    //     body: new FormData(form),
    //     mode: 'no-cors' // Disable CORS for the request
    // })
    //     .then(response => {
    //         // You won't be able to handle the response directly in 'no-cors' mode
    //         msg.innerHTML = "Message Sent Successfully!!";
    //         setTimeout(function () {
    //             msg.innerHTML = "";
    //         }, 5000);
    //         form.reset();
    //     })
    //     .catch(error => {
    //         msg.innerHTML = "Something Went Wrong!!";
    //         setTimeout(function () {
    //             msg.innerHTML = "";
    //         }, 5000);
    //         console.error('Error!', error.message);
    //     });
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

// CORS
// function doPost(e) {
//     // Add CORS headers
//     var response = HtmlService.createHtmlOutput();
//     response.append("<p>Your Google Apps Script is working!</p>");
//     return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT).setHeaders({
//         "Access-Control-Allow-Origin": "*", // This allows all origins
//         "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
//         "Access-Control-Allow-Headers": "Content-Type"
//     });

//     // Your existing form submission handling code here
// }
