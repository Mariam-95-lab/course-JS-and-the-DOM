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


const sections = document.querySelectorAll('section');
const navbarlist = document.getElementById('navbar__list');
let numberOfListItems = sections.length;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListItem(id){
	for (section of sections) {
		sectionName= section.getAttribute('data-nav');
		sectionlink = section.getAttribute('id');
		ListItem = document.createElement('li');
		ListItem.innerHTML = `<a class='menu__link' href='#${sectionlink}'>${sectionName}</a>` ;
		navbarlist.appendChild(ListItem);
	}
}
createListItem();

/* making section in viewpos
*/

function sectionInViewport(){
	let sectionPos = section.getBoundingClientRect(section);
	return (sectionPos.top >= 0);
}

function toggleActiveClass(){
	for (section of sections){
		if (sectionInViewPort(section)){
			if (!section.classList.contains('your-active-class')) {
			section.classList.add('your-active-class')

		} else{
			section.classList.remove('your-active-class')
		}
	}}
}

document.addEventListener('scroll',toggleActiveClass)

