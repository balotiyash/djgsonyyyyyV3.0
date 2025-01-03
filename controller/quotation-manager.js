/** 
 * File: quotation-manager.js
 * Author: Yash Balotiya
 * Description: This file contains all the logical stuffs to handle Quotation Management Page
 * Created on: 27/12/2024
 * Last Modified: 03/01/2025
*/

// Function to tally the horizontal amount
function tallyHorizontalAmount() {
    const quantity = document.querySelectorAll('.qntyInput');
    const rate = document.querySelectorAll('.rateInput');
    const total = document.querySelectorAll('.hTotal');

    // Adding input event listener to each quantity input
    quantity.forEach((element, index) => {
        element.addEventListener('input', () => {
            // Calculating the total amount
            const totalAmount = element.value * rate[index].value;
            total[index].innerHTML = totalAmount.toFixed(2);

            // Calculating the total amount of all the services ABCDE
            let soundTotal = 0;
            for (let i = 0; i < 5; i++) {
                soundTotal += parseFloat(total[i].innerHTML);
            }
            document.getElementById('soundTotal').innerHTML = parseFloat(soundTotal).toFixed(2);

            // Calculating sub total
            let subTotal = 0;
            total.forEach((element) => {
                subTotal += parseFloat(element.innerHTML);
            });
            document.getElementById('subTotal').innerHTML = parseFloat(subTotal).toFixed(2);

            // Calculating discount and grand total
            const discount = document.getElementById('discountInput');
            let discountAmount = 0;
            let grandTotal = subTotal;

            discount.addEventListener('input', () => {
                discountAmount = parseFloat(subTotal * discount.value / 100).toFixed(2);
                document.getElementById('discountAmount').innerHTML = discountAmount;
                grandTotal = subTotal - discountAmount;
                document.getElementById('grandTotal').innerHTML = parseFloat(grandTotal).toFixed(2);
            });

            document.getElementById('grandTotal').innerHTML = parseFloat(grandTotal).toFixed(2);
        });
    });
}

// Fetching all the event details
const eventDetails = document.querySelectorAll('.eventDetails');

// Function to download the invoice
function downloadInvoice() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('contactNo').value;
    const eventLocation = document.getElementById('location').value;
    const eventDate = document.getElementById('date').value;
    const event = document.getElementById('event').value;
    const eventTime = document.getElementById('time').value;

    if (name == '' || phone == '' || eventLocation == '' || eventDate == '' || event == '' || eventTime == '') {
        alert('Please fill all the details');
        return;
    }

    const options = {
        margin: 0.5,
        filename: `INVOICE_${eventDetails[0].value}_${eventDetails[3].value}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 5 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    const invoiceElement = document.getElementById('quotation-table');
    html2pdf().set(options).from(invoiceElement).save().then(() => {
        // invoiceElement.style.display = 'none';
    });
}

document.getElementById("downloadBtn").addEventListener('click', downloadInvoice);

// Function that runs when the window is loaded
window.onload = () => {
    // Handling Logout
    const isLogged = localStorage.getItem('isLoggedIn');
    if (isLogged == "false") {
        window.location.href = '../';
    }

    // Adding autocomplete attribute = off to all the event details
    eventDetails.forEach((element) => {
        element.setAttribute('autocomplete', 'off');
    });

    // Calling the function to tally the horizontal amount
    tallyHorizontalAmount();
}