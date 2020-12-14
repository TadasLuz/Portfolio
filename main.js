// Sliders
const sliderBtn = document.getElementById('slider-btn');
const sliderCloseBtn = document.getElementById('close-slider');
const sliderCourses = document.getElementById('slider-courses');
// Colors
const colorBtn = document.getElementById('color-btn');
const sliderColor = document.getElementById('slider-color');
const white = document.getElementById('white');
const lightGreen = document.getElementById('light-green');
const orange = document.getElementById('orange');
const saladGreen = document.getElementById('salad-green');
const blueGreen = document.getElementById('blue-green');
const dark = document.getElementById('dark');
// Contacts
const contactsBtn = document.getElementById('open-contacts');
const contactsCloseBtn = document.getElementById('close-contacts');
const contacts = document.getElementById('contacts');


// Open and close event handlers
// Show courses slider
sliderBtn.addEventListener('click', () => {
    sliderCourses.classList.add('show-courses');
})

// Hide courses slider
sliderCloseBtn.addEventListener('click', () => {
    sliderCourses.classList.remove('show-courses');
})

// Show color slider
colorBtn.addEventListener('click', () => {
    sliderColor.classList.add('show-color');
})

// Hide courses and color slider on outside click
document.addEventListener('mouseup', function(e) {
    if (!sliderCourses.contains(e.target)) {
        sliderCourses.classList.remove('show-courses');
    }
    if (!sliderColor.contains(e.target)) {
        sliderColor.classList.remove('show-color');
    }
});

// Show contacts
contactsBtn.addEventListener('click', () => contacts.classList.add('show-contacts'));

// Hide contacts
contactsCloseBtn.addEventListener('click', () => contacts.classList.remove('show-contacts'));

// Hide contacts on outside click
window.addEventListener('click', e => e.target == contacts ? contacts.classList.remove('show-contacts') : false);


// Color change events
const changeColor = document.querySelectorAll(".change-color");
const changeBackgroundColor = document.querySelectorAll(".change-background-color");

white.addEventListener('click', () => {
    changeColor.forEach((c) => {
    c.style.color = "#fff";
});
    changeBackgroundColor.forEach((bc) => {
    bc.style.backgroundColor = "#fff";
});
});

lightGreen.addEventListener('click', () => {
    changeColor.forEach((c) => {
    c.style.color = "#D8F0D6";
});
    changeBackgroundColor.forEach((bc) => {
    bc.style.backgroundColor = "#D8F0D6";
});
});

orange.addEventListener('click', () => {
    changeColor.forEach((c) => {
    c.style.color = "#F1A238";
});
    changeBackgroundColor.forEach((bc) => {
    bc.style.backgroundColor = "#F1A238";
});
});

saladGreen.addEventListener('click', () => {
    changeColor.forEach((c) => {
    c.style.color = "#AAF83A";
});
    changeBackgroundColor.forEach((bc) => {
    bc.style.backgroundColor = "#AAF83A";
});
});

blueGreen.addEventListener('click', () => {
    changeColor.forEach((c) => {
    c.style.color = "#4DE4BB";
});
    changeBackgroundColor.forEach((bc) => {
    bc.style.backgroundColor = "#4DE4BB";
});
});

dark.addEventListener('click', () => {
    changeColor.forEach((c) => {
    c.style.color = "darkgray";
});
    changeBackgroundColor.forEach((bc) => {
    bc.style.backgroundColor = "darkgray";
});
});


// Current year
const year = document.getElementById('year');
const currentYear = new Date().getFullYear();
year.innerText = currentYear;

