document.addEventListener('DOMContentLoaded', function() {

let slider = document.getElementById('slider-before');
let sliderBackground = document.getElementById('slider');
let darkSide = document.getElementById('dark-slide');
let lightSide = document.getElementById('light-slide');


function moveButton() {
    if(slider.style.left === '4px') {
        slider.style.left = '29px';
        sliderBackground.style.backgroundColor = '#58BD90';
    } else {
        slider.style.left = '4px';
        sliderBackground.style.backgroundColor = '';
    }

};

function moveToDark() {
    if(slider.style.left != '4px') {
        slider.style.left = '4px';
        sliderBackground.style.backgroundColor = '';
    }
};

function moveToLight() {
    if(slider.style.left === '4px') {
        slider.style.left = '29px';
        sliderBackground.style.backgroundColor = '#58BD90';
    }
};

slider.addEventListener('click', moveButton);
sliderBackground.addEventListener('click', moveButton);
darkSide.addEventListener('click', moveToDark);
lightSide.addEventListener('click', moveToLight);

});