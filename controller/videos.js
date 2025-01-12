/** 
 * File: controller/videos.js
 * Author: Yash Balotiya
 * Description: This file contains the Logical Part of Videos & Vlogs Page.
 * Created on: 03/01/2025
 * Last Modified: 12/01/2025
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

// Function to load a page of videos
function loadVideos() {
    // Hide the large iframe section and show the "Not Found" section if there are no video URLs
    if (videoUrls.length === 0) {
        document.getElementById('large-iframe-container').style.display = 'none';
        document.getElementById('not-found-sec').style.display = 'flex';
    }

    // Get the current URL
    const url_string = window.location.href;
    const url = new URL(url_string);

    // Get the 'type' parameter from the URL
    const type = url.searchParams.get("type");

    // Initialize variables for the video source and title
    let videoSource = "";
    let title = "";

    // Set video source and title based on the 'type' parameter
    if (type === "1") {
        videoSource = "../asset/video/DJ_compressed.mp4";
        title = "Videos";
    } else if (type === "2") {
        videoSource = "../asset/video/Party_compressed.mp4"; 
        title = "Vlogs";
    }

    // Set the video source dynamically
    document.getElementById('video-source').src = videoSource;

    // Set the title dynamically
    document.getElementById('vidtxt').innerHTML = title;

    // Reload the video element to apply the new source
    document.getElementById('myVideo').load();

    // Fetch the video/Vlogs URLs from the JSON file
    fetch(`../server/${title.toLowerCase()}.json`)
        .then(response => response.json())
        .then(data => {
            videoUrls = data.urls; // Store all video URLs in the array
            displayVideos(); // Call to display the videos after data is fetched
        })
        .catch(error => {
            console.error('Error fetching videos:', error);
            document.getElementById('not-found-sec').style.display = 'flex'; // Show not found if error occurs
        });

}

// Function to display videos (called after data is fetched)
function displayVideos() {
    // Clear the current iframe container before loading new videos
    iframeContainer.innerHTML = '';

    // Calculate start and end indices based on current page
    const startIndex = currentPage * videosPerPage; // Start index for current page
    const endIndex = Math.min(startIndex + videosPerPage, videoUrls.length); // End index

    // Set the first video URL to the large iframe (index 0)
    if (videoUrls.length > 0) {
        largeIframe.src = videoUrls[0];
        document.getElementById('large-iframe-container').style.display = 'block';
        document.getElementById('not-found-sec').style.display = 'none';
    }

    // Loop through and add the smaller iframes
    for (let i = startIndex + 1; i <= endIndex; i++) {
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
    currentPage++; // Increment the page number
    loadVideos();  // Load the next page of videos
    document.getElementById('large-iframe-container').scrollIntoView(); // Scroll to the top of the video section
});

// Initial load
loadVideos();

// Setting the isLoggedIn to false by default
window.localStorage.setItem('isLoggedIn', 'false');