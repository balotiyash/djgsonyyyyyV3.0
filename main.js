/** 
 * File: 
 * Author: 
 * Description: 
 * Created on: 
 * Last Modified: 
*/

// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the section is visible
});

// Observe the main section
observer.observe(document.querySelector('#sec-3'));

// Observe each child for sequential animation
document.querySelectorAll('.child-8').forEach(child => {
    observer.observe(child);
});
