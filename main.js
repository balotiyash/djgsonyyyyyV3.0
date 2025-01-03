/** 
 * File: main.js
 * Author: Yash Balotiya
 * Description: This file contains the main JavaScript code for the Home Page.
 * Created on: 31/12/2024
 * Last Modified: 03/01/2025
*/

// My Services Section Animation
// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, {
    threshold: 0.3 // Trigger when 20% of the section is visible
});

// Observe the main section
observer.observe(document.querySelector('#sec-3'));

// Observe each child for sequential animation
document.querySelectorAll('.event-card').forEach(child => {
    observer.observe(child);
});

// Contact Me Button
document.querySelector('#contact-me-btn').addEventListener('click', () => {
    window.location.href = './view/contact.html';
});

// Portfolio Button
document.querySelector('#about-me-btn').addEventListener('click', () => {
    window.location.href = './view/about.html';
});

// Review Button
document.querySelector('#review-btn').addEventListener('click', () => {
    window.location.href = 'https://g.page/r/CbUB0GlQWSXXEBE/review';
});

// Book Now Button
document.querySelector('#book-now-btn').addEventListener('click', () => {
    window.location.href = 'https://wa.me/919769794670';
});

// Function to fetch Vlogs and Videos
async function fetchVlogsVideos() {
    const FRAMES = ["frame1", "frame2", "frame3", "frame4", "frame5"];
    let videos = [];
    let vlogs = [];
    let allVideos = [];

    try {
        // Fetch the videos.json file asynchronously
        const response1 = await fetch("./server/videos.json");
        const response2 = await fetch("./server/vlogs.json");

        // Check if the response is OK (status code 200-299)
        if (!response1.ok && !response2.ok) {
            throw new Error(`Response status: ${response1.status}, ${response2.status}`);
        }

        // Parse the response as JSON
        const data1 = await response1.json();
        const data2 = await response2.json();

        videos = data1.urls;  // Assign the "urls" array to the videos variable
        vlogs = data2.urls;  // Assign the "urls" array to the videos variable
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error(error.message);
    }

    // Merge videos and vlogs arrays into allVideos array
    allVideos = [...videos, ...vlogs];

    // Shuffle the allVideos array
    allVideos = shuffle(allVideos);

    // Load the first 5 videos
    for (let i = 0; i < FRAMES.length; i++) {
        let video = allVideos[i];
        let frame = document.getElementById(FRAMES[i]);
        frame.src = video;
    }
}

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to fetch google reviews
async function fetchGoogleReviews() {
    try {
        // Fetch the videos.json file asynchronously
        const response = await fetch("./server/google-reviews.json");

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        // Parse the response as JSON
        const data = await response.json();
        const reviews = data.reviews;

        // Generate a random number between 0 and the length of the reviews array
        const randomIndex = Math.floor(Math.random() * reviews.length);
        const review = reviews[randomIndex];

        // Display the review on the page
        document.querySelector('#review-text').textContent = review.text;
        document.querySelector('#review-author').textContent = review.name;

    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error(error.message);
    }
}

// Onload Function
window.onload = async function () {
    // Setting the isLoggedIn to false by default
    window.localStorage.setItem('isLoggedIn', 'false');

    // Calling the functions to fetch Vlogs and Google Reviews
    fetchVlogsVideos();
    fetchGoogleReviews();
}