/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


//Define Global Variables

const navigation_bar = document.querySelector('.navbar__menu')
const navigation_list = document.querySelector('#navbar__list');
const arr_sections = document.querySelectorAll('section');
document.addEventListener('DOMContentLoaded', ActiveNav, false); 

/* Begin Main Functions */

// Start build the Navigation_Bar
function navigation_bar_func(){
        arr_sections.forEach(section => {
        const navigation_button = document.createElement('li');
        //Insert the html text to the li
        navigation_button.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        navigation_list.appendChild(navigation_button);
        behavier_scroll(navigation_button, section);
    });
}
navigation_bar_func();


// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", () => {
    // setting active section   
    arr_sections.forEach(section => {
        //Check if the section is in viewport or not 
        if (section.getBoundingClientRect().top <= 200 &&
            section.getBoundingClientRect().bottom >= 200) {
            //add 'your-active-class' to the specific section
            section.classList.add("your-active-class");
        } 
        //Removing section active class when section is off sight
        else section.classList.remove("your-active-class");
    });
});

//Make the active section's tab active in the navigation bar
function ActiveNav(){
    window.addEventListener('scroll', function() {
		const elements = document.getElementsByClassName('landing__container');		
		for (var i = 0; i < elements.length; i++) {
			const element_position = elements[i].getBoundingClientRect();
			const pos = element_position.top;
				if (pos <= window.innerHeight){
					var links = document.getElementById("navbar__list").querySelectorAll('li');
					links[i].className += " active";
		};
		};
	}); 
}

// Scroll to anchor id using scrollTO event
function behavier_scroll(navigation_button, section){
        navigation_button.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}


 /**
 * End Main Functions
 * 
*/

