/** 
 * File: main.js
 * Author: Yash Balotiya
 * Description: This file contains the main JavaScript code for the Home Page.
 * Created on: 31/12/2024
 * Last Modified: 02/02/2025
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
    threshold: 0 // Trigger when 20% of the section is visible
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
    window.open('https://g.page/r/CbUB0GlQWSXXEBE/review', '_blank');
});

// Function to fetch Vlogs and Videos
async function fetchVlogsVideos() {
    const FRAMES = ["frame1", "frame2", "frame3", "frame4", "frame5"];
    let videos = [];
    let vlogs = [];
    let allVideos = [];

    try {
        // Fetch the videos.json file asynchronously
        // const response1 = await fetch("./server/videos.json");
        // const response2 = await fetch("./server/vlogs.json");

        // Check if the response is OK (status code 200-299)
        // if (!response1.ok && !response2.ok) {
        //     throw new Error(`Response status: ${response1.status}, ${response2.status}`);
        // }

        // Parse the response as JSON
        // const data1 = await response1.json();
        // const data2 = await response2.json();

        const data1 = {
            "urls": [
                "https://www.youtube.com/embed/aHshlgR1RoQ",
                "https://www.youtube.com/embed/-hxVmmUPHQw",
                "https://www.youtube.com/embed/3EUcmOz4Tzs",
                "https://www.youtube.com/embed/YhnWtQnyIPU",
                "https://www.youtube.com/embed/W6XxGoozDa0",
                "https://www.youtube.com/embed/HL0SA3hGoRM",
                "https://www.youtube.com/embed/LD0pwvzzqU4",
                "https://www.youtube.com/embed/CL-bVptF75Y",
                "https://www.youtube.com/embed/egaJYvhmzoo?si=BSTwum_WIu9MHcyK",
                "https://www.youtube.com/embed/3Mv1Y9jiXjo?si=x6W3zeUa1nLeSW2J",
                "https://www.youtube.com/embed/YHlEDOBz-88?si=FNn6XiubcPaNl7HY",
                "https://www.youtube.com/embed/kqnTuuR-r48?si=Ebj8tCDemnr_pqDq"
            ]
        };

        const data2 = {
            "urls": [
                "https://www.youtube.com/embed/UKMujf9KXXo?si=7_KaDxe1wFb00kij"
            ]
        };

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
        // const response = await fetch("./server/google-reviews.json");

        // Check if the response is OK (status code 200-299)
        // if (!response.ok) {
        //     throw new Error(`Response status: ${response.status}`);
        // }

        // Parse the response as JSON
        // const data = await response.json();

        const data = {
            "reviews": [
                {
                    "name": "Isha Gada",
                    "text": "I’ve always admired your talent and the way you bring life to every event with your music. Your ability to create an unforgettable vibe is truly on wedding day very impressive!"
                },
                {
                    "name": "Rajesh jain",
                    "text": "DJ Ganesh is simply superb, fantastic set up and great choice of music to keep the crowd on their feet."
                },
                {
                    "name": "Komal Balotiya",
                    "text": "My friend's DJ skills are pure fire! Their music selection is always on point, making every set a memorable experience. Worth every second."
                },
                {
                    "name": "Aleen Khan",
                    "text": "His DJ adds spark n miracle in the air✨"
                },
                {
                    "name": "Vishnu Paliya",
                    "text": "I've had the privilege of experiencing my friend's DJ sets, and they always leave me wanting more. Trust me, this talent is worth your attention. A must-listen!"
                },
                {
                    "name": "Pankaj Sunariwal",
                    "text": "Incredible DJ incredible music! My friend knows how to set the mood right. Highly recommended for anyone seeking musical bliss."
                },
                {
                    "name": "Nachiket Adhikari",
                    "text": "I can't get enough of my friend's music. It's the perfect blend of talent and passion. Highly recommend giving it a listen."
                },
                {
                    "name": "Vedant Palekar",
                    "text": "It was such a memorable experience. That in-between memes sound was good ones. Loved it...🤌 …"
                },
                {
                    "name": "Amit Mishra",
                    "text": "Best DJ I have experienced till now. Your music selection is on point. You really know how to read the crowd."
                },
                {
                    "name": "Simi Sharma",
                    "text": "The best DJ till now, I enjoyed every song and moment.. I would recommend this to everyone."
                },
                {
                    "name": "Siddhartha Dubey",
                    "text": "Amazing DJ Work, great and latest collections of music and smooth coordination. Loved it. 💫💫 …"
                },
                {
                    "name": "Bhatia Krish",
                    "text": "Best DJ. Played good songs that people can vibe to."
                },
                {
                    "name": "Yash Balotiya",
                    "text": "Worth it. This guy has the best taste in music. Really enjoyed. Highly recommended."
                },
                {
                    "name": "Sunil Suwasiya",
                    "text": "This is my best experience with him. Best at playing wedding parties, birthday parties, and many more events. Best player!"
                },
                {
                    "name": "Tinuanand Mourya",
                    "text": "The best thing about this DJ man is that he is providing all types of songs to his customers."
                },
                {
                    "name": "Kashif Sayyad",
                    "text": "This guy is the reason why I fell in love with music. Literally, he is really amazing."
                },
                {
                    "name": "Anis Chauhan",
                    "text": "Really had an amazing time, great music, great tunes at affordable prices."
                },
                {
                    "name": "lalit Rithadiya",
                    "text": "His songs still hit a different level. Truly a masterpiece from DJ Sonyyy 💖🔥🔥."
                },
                {
                    "name": "Rahul Jatoliya",
                    "text": "Thank you for everything you did to make our wedding day perfect!\""
                },
                {
                    "name": "Virti Gala",
                    "text": "Makes the party fun! Great experience! Worth every party😎!"
                },
                {
                    "name": "Ravi Singadia",
                    "text": "The 21st century has a new type of rock star known as a DJ."
                },
                {
                    "name": "Kiran Kanu",
                    "text": "He is a nice person and very helpful ☺️."
                },
                {
                    "name": "Divakar",
                    "text": "Good sound operator at a reasonable price, fully satisfied."
                },
                {
                    "name": "Vivek Tungaria",
                    "text": "Magician DJ Boy, nice collection of wonderful songs."
                },
                {
                    "name": "Nikhil Suwasiya",
                    "text": "The operator has the best collection of music."
                },
                {
                    "name": "karan Balotiya",
                    "text": "Your operating is such an awesome 👍🏻."
                },
                {
                    "name": "Hemant Bora",
                    "text": "He is professional in his work."
                },
                {
                    "name": "Nandini kakaraniya",
                    "text": "Our wedding was right in the middle of all the covid scare...Dj Ganesh played at our Mehndi and made everyone forget the stress we had all around us and just let our hair down. He was great, accommodative and made the party happen ! Thanks."
                },
                {
                    "name": "Parul Gada",
                    "text": "We had Booked Dj Ganesh  for our 25th Anniversary party... He was very good with his mixing skills and more importantly he made sure he played all requests we made... If u want to make ur event a great success book him without any second thought.."
                },
                {
                    "name": "Rane Shravani",
                    "text": "Dj Ganesh (DJGSONYYYYY) made our college farewell unforgettable! The music was perfect, the atmosphere was electric, and we had an incredible time. Thank you for an amazing experience!"
                },
                {
                    "name": "Yashoda Nangaliya",
                    "text": "It has a very good music player and its playlist is very good. The taste of his music is also good, hope that you will also enjoy his songs in your party, wedding and any other occasion."
                },
                {
                    "name": "Parth Nagda",
                    "text": "Thank you so much for organising the DJ for our garba night– you are fantastic – really friendly and professional and not once did the dance floor empty out or even have a quieter period! ..."
                },
                {
                    "name": "Ankit Rastogi",
                    "text": "Understands the requirement and executed it the same way !! Recommended for house parties ( kids and adults ) .Very affordable . Go for it !"
                },
                {
                    "name": "Kids Education",
                    "text": "Dj Sonyyy knows how to keep the party alive with their electrifying beats and amazing mixes! 🎧🎶🙌 #DJSonyyy"
                },
                {
                    "name": "Khushi Sunariwal",
                    "text": "Best songs collection 👍 …"
                },
                {
                    "name": "Jitendra Kiradiya",
                    "text": "Awesome remixer buddy 🤟🤘 …"
                },
                {
                    "name": "Bhumi Shah",
                    "text": "His work is amazing!"
                },
                {
                    "name": "Manoj Chorotiya",
                    "text": "Good experience dj boy 😎 …"
                },
                {
                    "name": "Afsha Shaikh",
                    "text": "Nice song collection"
                },
                {
                    "name": "Meet Thakrar",
                    "text": "Best dj in town"
                },
                {
                    "name": "Krishna Gupta",
                    "text": "Nice song"
                },
                {
                    "name": "Sumit Fulwaria",
                    "text": "Amazing playlist 🎵🎶. …"
                },
                {
                    "name": "Ishwar Jatoliya",
                    "text": "Best DJ"
                },
                {
                    "name": "Amar Gehlot",
                    "text": "VERY GOOD"
                },
                {
                    "name": "Kishor Khatnawaliya",
                    "text": "Nice Dj 🎧 …"
                },
                {
                    "name": "Sahil Shivale",
                    "text": "VERY NICE EXPERIENCE"
                }
            ]
        };
        
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

    // Fetch Google Reviews every 5 seconds
    setInterval(fetchGoogleReviews, 5000);
}