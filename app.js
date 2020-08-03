/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * sections to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navbarMenu = document.querySelector('.navbar__menu ul');
const navabrLinks = document.querySelector('.navbar__menu a');
const anchorNav = document.getElementsByClassName('anchor__nav');
const navbarBtn = document.querySelector('.navbar__btn');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

function dynamicNav() {

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add('anchor__nav');
    }

}
dynamicNav();

// getting an attribute (data-nav) and creating new <li> and appending it to the parent elemnt <ul> 

for (let i = 0; i < anchorNav.length; i++) {

    let sectionLink = anchorNav[i].getAttribute('data-nav');
    let li = document.createElement('li');
    li.innerHTML = sectionLink.link('#' + anchorNav[i].getAttribute('id'));
    navbar.appendChild(li);
    let current = document.querySelector('li');


}

// Adds the class 'active' to the list itemas and/or navitems
let lis = document.querySelectorAll('li');
lis.forEach(li => {
    li.addEventListener('click', function() {
        lis.forEach(navItem => navItem.classList.remove('active'));
        this.classList.add('active');
    });
});

// Returning the size of an element and its position relative to the viewport.

function getNumber(value) {

    return Math.floor(value.getBoundingClientRect().top);

}


// Adding class 'active' to the corresponding section when near top of its viewport

function addClassActive(condition, item) {


    if (condition) {

        item.classList.add('your-active-class');

    }

}


// Removing the class 'active' when you scroll to another section or when you go away from its viewport

function removeClassActive(item) {

    item.classList.remove('your-active-class');


}

// Implementing those activations into each section

function impAction() {

    sections.forEach(item => {

        const elementGetNumber = getNumber(item);

        inView = () => elementGetNumber < 150 && elementGetNumber >= -150;

        removeClassActive(item);
        addClassActive(inView(), item);
    })

}

window.addEventListener('scroll', impAction);



// Scrolling to section on link click and scrolling to anchor ID using scrollTO event

function scrollToId() {

    const listItem = document.querySelectorAll('li a');

    for (let i = 0; i < listItem.length; i++) {

        listItem[i].classList.add('link__item')
        listItem[i].setAttribute('id', 'section' + [i + 1]);
    }

    for (let i = 0; i < anchorNav.length; i++) {

        const top = anchorNav[i].getBoundingClientRect().top + window.pageYOffset;

        listItem[i].addEventListener('click', (elem) => {

            elem.preventDefault();
            let scrollSet = {
                top: top,
                left: 0,
                behavior: 'smooth'
            };
            window.scrollTo(scrollSet);
        });
    }

}
scrollToId();



// Making the navigation bar collapsible for mobile devices such as smartphones

navbarBtn.addEventListener('click', () => {

    let collBar = document.querySelector('.navbar__menu');
    if (collBar.style.display === 'block') {
        collBar.style.display = 'none';
    } else {
        collBar.style.display = 'block';
    }
    navbarBtn.classList.toggle('toggle');
});

/**
 * End Main Functions
 */