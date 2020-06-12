
/* Global Variables */
const listElement = document.querySelector('#navbar__list');
const sectionList = document.querySelectorAll('section');
const sectionArray = [...sectionList];



/* Functions*/
const isInViewport = function (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

// build the nav
const navbar = sectionArray.map(el => {
    const singleListElement = document.createElement('li');
    const singleLink = document.createElement('a');
    const sectionID = el.getAttribute('id');

    singleLink.textContent = el.getAttribute('data-nav');
    singleLink.classList.add('menu__link');
    singleLink.setAttribute('href', '#' + sectionID);
    singleListElement.appendChild(singleLink);
    listElement.appendChild(singleListElement);
});

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', function (event) {
    for (let section of sectionArray) {
        const sectionHeader = section.querySelector('h2');
        console.log(sectionHeader);
        if (isInViewport(sectionHeader)) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}, false);




