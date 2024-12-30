/** 
 * File: quotation-manager.js
 * Author: Yash Balotiya
 * Description: This file contains all the logical stuffs to handle Quotation Management Page
 * Created on: 27/12/2024
 * Last Modified: 27/12/2024
*/

function tallyAmount(value1, value2, total) {
    const VALUE2 = document.getElementById(value2).value;
    document.getElementById(total).innerHTML = parseFloat(value1 * VALUE2).toFixed(2);
}

const options = {
    margin: 1,
    filename: `INVOICE_${invoiceData.sale_id}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};

html2pdf().set(options).from(invoiceElement).save().then(() => {
    invoiceElement.style.display = 'none';
});