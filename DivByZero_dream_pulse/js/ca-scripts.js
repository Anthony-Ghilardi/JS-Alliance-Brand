var customerName = "Alliance  ";


function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;

    const h1Element = document.getElementById('tm-header');
    h1Element.textContent = customerName

    // const h1Element changes the customer name to John Doe affecting the h1 tag

    const h2Element = document.getElementById('introheader');
    h2Element.textContent = customerName
    // Const h2Element changes the cusomter name to Alliance affecting the h2 tag

};

function toggleColors() {
    const newColors = document.querySelectorAll('.tm-white-rect');
        newColors.forEach(newColor => {
            newColor.classList.remove('tm-white-rect');
            newColor.classList.add('tm-blue-rect');
        })
    // This const and .forEach changes tm-white-rect to tm-blue-rect for all corresponding tags

};

function hideElement() {
    const hideList = document.querySelector('.tm-social-links');
        hideList.style.display = 'none';
    // This const hides the ul containing social media links and icons

};

 function addText() {
    const introText = document.getElementById('intropara1');
        introText.textContent = 'Alliance was founded in 1931 by Albert Daniels.'
    // This const above adds paragraph text about the company founding year etc.

    const leadText = document.getElementById('intropara2');
        leadText.textContent = 'The company is a leader in P.C. Manufacturing'
    // This const above add paragraph text about the companies leading product

    const aboutText = document.getElementById('aboutpara1');
        aboutText.textContent = 'We deliver the best service this side of creation'
     // This const above adds paragraph text about the companies services

    const mottoText = document.getElementById('aboutpara2');
        mottoText.textContent = 'Our motto is satisfaction guaranteed'
    // This const above adds paragraph text containg the company motto

    const phoneNumber = document.getElementById('addresspara');
        phoneNumber.textContent = '1-800-565-5656'
    // This const above adds paragraph text containing the company phone#

}; 



