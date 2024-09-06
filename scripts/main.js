document.addEventListener('DOMContentLoaded', function() {

let slider = document.getElementById('slider-before');
let sliderBackground = document.getElementById('slider');
let darkSide = document.getElementById('dark-slide');
let lightSide = document.getElementById('light-slide');


function moveButton() {
    if(slider.style.left === '4px') {
        slider.style.left = '29px';
        sliderBackground.style.backgroundColor = '#58BD90';
        lightMode();
    } else {
        slider.style.left = '4px';
        sliderBackground.style.backgroundColor = '';
        darkMode();
    }

};

function moveToDark() {
    if(slider.style.left != '4px') {
        slider.style.left = '4px';
        sliderBackground.style.backgroundColor = '';
        darkMode();
    }
};

function moveToLight() {
    if(slider.style.left === '4px') {
        slider.style.left = '29px';
        sliderBackground.style.backgroundColor = '#58BD90';
        lightMode();
    }
};

function lightMode() {
    let bground = document.body;
    bground.style.backgroundColor = '#FBFBFB';
    bground.style.color = '#2A2536';
    let skills = document.getElementsByClassName('skill-caption');
    skills = Array.from(skills);
    skills.forEach(skill => {
        skill.style.color = '#2A2536';
    });
    let portrait = document.getElementById('portrait');
    portrait.style.boxShadow = '5px 5px black';
    let project = document.getElementsByClassName('project-image');
    project = Array.from(project);
    project.forEach(pro => {
        pro.style.boxShadow = '3px 3px black';
    let navLink = document.getElementsByClassName('nav-link');
    navLink = Array.from(navLink);
    navLink.forEach(link => {
        link.style.color = '#2A2536';
    });

});
}


function darkMode(){
    let bground = document.body;
    bground.style.backgroundColor = '';
    bground.style.color = '';
    let skills = document.getElementsByClassName('skill-caption');
    skills = Array.from(skills);
    skills.forEach(skill => {
        skill.style.color = '';
    });
    let portrait = document.getElementById('portrait');
    portrait.style.boxShadow = '';
    let project = document.getElementsByClassName('project-image');
    project = Array.from(project);
    project.forEach(pro => {
        pro.style.boxShadow = '';
    });
    let navLink = document.getElementsByClassName('nav-link');
    navLink = Array.from(navLink);
    navLink.forEach(link => {
        link.style.color = '';
    });
}

slider.addEventListener('click', moveButton);
sliderBackground.addEventListener('click', moveButton);
darkSide.addEventListener('click', moveToDark);
lightSide.addEventListener('click', moveToLight);

});