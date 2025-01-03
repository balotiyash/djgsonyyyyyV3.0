/** 
 * File: controller/videos.js
 * Author: Yash Balotiya
 * Description: This file contains the Logical Part of Videos & Vlogs Page.
 * Created on: 03/01/2025
 * Last Modified: 03/01/2025
*/

// ANIMATION1
window.addEventListener('scroll', function () {
    var videoSection = document.getElementById('video');
    var text = document.querySelector('.text h1');
    var scrollPosition = window.scrollY;

    // Calculate new height for the video section (decreases as you scroll)
    var newHeight = Math.max(50, 100 - scrollPosition / 10);  // Minimum height of 50vh
    videoSection.style.height = newHeight + 'vh';

    // Optionally, change text size or opacity based on scroll position
    var newFontSize = Math.max(2, 4 - scrollPosition / 100);  // Text size decreases with scroll
    text.style.fontSize = newFontSize + 'rem';

    // Optionally, fade out text as the video section shrinks
    var newOpacity = Math.max(0, 1 - scrollPosition / 300);  // Text fades out as you scroll
    text.style.opacity = newOpacity;
});

// Variables to hold video URLs and state
let videoUrls = [];
let currentPage = 0;
const videosPerPage = 3; // Number of videos per page
const iframeContainer = document.getElementById('other-iframe-container');
const loadMoreButton = document.getElementById('load-more');
const largeIframe = document.getElementById('v1');

// Fetch the video URLs from the JSON file
fetch('../server/videos.json')
    .then(response => response.json())
    .then(data => {
        videoUrls = data.urls; // Store all video URLs in the array
        loadVideos(); // Load the first page of videos
    })
    .catch(error => console.error('Error fetching videos:', error));

// Function to load a page of videos
function loadVideos() {
    // Clear the current iframe container before loading new videos
    iframeContainer.innerHTML = '';

    // Calculate start and end indices based on current page
    const startIndex = currentPage * videosPerPage + 1; // Start index (skip the first URL for large iframe)
    const endIndex = Math.min(startIndex + videosPerPage - 1, videoUrls.length); // End index

    // Set the first video URL to the large iframe (index 0)
    if (videoUrls.length > 0) {
        largeIframe.src = videoUrls[0];
    }

    // Loop through and add the smaller iframes
    for (let i = startIndex; i <= endIndex; i++) {
        if (videoUrls[i] === undefined) {
            continue; // Skip if the URL is undefined
        }

        const iframe = document.createElement('iframe');
        iframe.classList.add('subvid');
        iframe.src = videoUrls[i];
        iframe.title = 'YouTube video player';
        iframe.frameborder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerpolicy = 'strict-origin-when-cross-origin';
        iframe.allowfullscreen = true;
        iframeContainer.appendChild(iframe);
    }

    // Show the "Load More" button only if there are more videos to load
    if (endIndex < videoUrls.length) {
        loadMoreButton.style.display = 'inline-block';
    } else {
        loadMoreButton.style.display = 'none'; // Hide button if all videos are loaded
    }
}

// Handle "Load More" button click to load the next set of videos
loadMoreButton.addEventListener('click', function () {
    currentPage++;
    loadVideos();
});
