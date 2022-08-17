"use strict";
//getting the vendor's and the client's inputs
//getting the vendor's details or values
const vendorBrandName = document.getElementById('brand');
const vendorBusinessType = document.getElementById('business');
const vendorCACNumber = document.getElementById('CACno');
const vendorAddress = document.getElementById('vAddress');
const vendorZipNumber = document.getElementById('zipNo');
const vendorPhoneNumber = document.getElementById('phoneNo');
const vendorEmail = document.getElementById('vEmail');
//getting clients details or values
const clientName = document.getElementById('cName');
const clientAddress = document.getElementById('cAddress');
const clientPhoneNumber = document.getElementById('cPhone');
//getting where to display the values
//getting the html tag for displaying the vendor's details
const dVendorBrand = document.getElementById('d-vendorBrand');
const dBizType = document.getElementById('d-BizType');
const dCACNo = document.getElementById('d-CACNo');
const dVendorAddress = document.getElementById('d-VendorAddress');
const dZipNo = document.getElementById('d-ZipNo');
const dPhoneNo = document.getElementById('d-PhoneNo');
const dEmail = document.getElementById('d-Email');
//getting the html tag for displaying the client's details
const dClientName = document.getElementById('clientName');
const dClientAddress = document.getElementById('clientAddress');
const dClientContact = document.getElementById('clientContact');
//changing the value of total and grandtotal 
const grandTotalChng = document.getElementById('grandTotal');
const totalChng = document.getElementById('total');
//getting the html tag for displaying the invoice number and date
const invoiceNumber = document.getElementById('invoiceNumber');
const issuedDate = document.getElementById('dateOfIssue');
//invoice number generator
const invoiceNum = () => {
    let uniqueNum = Math.floor(100000 + Math.random() * 900000);
    return `${uniqueNum}`;
};
//invoice date generator
const invoiceDate = () => {
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth();
    var actualMonth;
    switch (month) {
        case 0:
            actualMonth = "01";
            break;
        case 1:
            actualMonth = "02";
            break;
        case 2:
            actualMonth = "03";
            break;
        case 3:
            actualMonth = '04';
            break;
        case 4:
            actualMonth = '05';
            break;
        case 5:
            actualMonth = '06';
            break;
        case 6:
            actualMonth = '07';
            break;
        case 7:
            actualMonth = "08";
            break;
        case 8:
            actualMonth = "09";
            break;
        case 9:
            actualMonth = "10";
            break;
        case 10:
            actualMonth = '11';
            break;
        case 11:
            actualMonth = '12';
            break;
        default:
            actualMonth = 'nothing';
    }
    var today = `${day}/${actualMonth}/${year}`;
    return today;
};
//table caption
const tableCaption = document.querySelector('caption');
//getting the table body
const tableBodyV = document.querySelector('tbody');
//getting the form tag
const form = document.getElementById('modalForm');
//adding an event to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //displaying vendor details in the voice
    let vendorValues;
    vendorValues = [
        vendorBrandName.value.toUpperCase(),
        vendorBusinessType.value,
        vendorCACNumber.value,
        vendorAddress.value,
        vendorZipNumber.value,
        vendorPhoneNumber.value,
        vendorEmail.value
    ];
    dVendorBrand.textContent = vendorValues[0];
    dBizType.textContent = vendorValues[1];
    dCACNo.textContent = vendorValues[2];
    dVendorAddress.textContent = vendorValues[3];
    dZipNo.textContent = vendorValues[4];
    dPhoneNo.textContent = vendorValues[5];
    dEmail.textContent = vendorValues[6];
    //displaying client details in the invoice
    let clientValues;
    clientValues = [clientName.value.toUpperCase(), clientAddress.value, clientPhoneNumber.value];
    dClientName.textContent = clientValues[0];
    dClientAddress.textContent = clientValues[1];
    dClientContact.textContent = clientValues[2];
    //caption for storing appreciation message and hiding it
    tableCaption.textContent = "Thanks" + " " + clientValues[0] + " " + "For Patronizing Us!";
    tableCaption.style.visibility = 'hidden';
    //displaying the invoice number and date of issue
    invoiceNumber.textContent = invoiceNum();
    issuedDate.textContent = invoiceDate();
    //changing the digit of total and grandTotal
    totalChng.textContent = '00';
    grandTotalChng.textContent = '00';
    //deleting the rows
    // var row = tableBodyV.rows.length;
    // for(let i = 0; i < row; i++){
    //     let trElements = tableBodyV.rows[i];
    //     trElements.remove();
    // }
    tableBodyV.innerHTML = "";
});
