var customerName = "Alliance  ";


function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    const h1Element = document.getElementById('tm-header');
    h1Element.textContent = 'John Doe'
    // const h1Element changes the customer name to John Doe affecting the h1 tag
    const h2Element = document.getElementById('introheader');
    h2Element.textContent = 'John Doe'
    // Const h2Element changes the cusomter name to John Doe affecting the h2 tag

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
    const hideList = document.querySelector('.nav.flex-row.tm-social-links')
        hideList.style.display = 'none';
    // This const hides the ul containing social media links and icons

};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->

}; 



