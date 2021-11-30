let windowsPopUp = document.querySelectorAll('div.window');
let allButtons = document.querySelectorAll('button');
let navigationMenu = document.querySelectorAll('.nav');

document.getElementById('hamburger').addEventListener('click', function (){
    document.getElementById('hamburger').classList.toggle('close');
    navigationMenu[0].classList.toggle('close_bar');
    navigationMenu[1].classList.toggle('close_bar');
    navigationMenu[2].classList.toggle('close_bar');
    navigationMenu[3].classList.toggle('close_bar');
    document.getElementById('nav').classList.toggle('close_nav');
});

allButtons[0].addEventListener('click', function () {
    windowsPopUp[0].style.display = 'flex';
});
allButtons[1].addEventListener('click', function () {
    windowsPopUp[0].style.display = 'none';
});

allButtons[2].addEventListener('click', function () {
    windowsPopUp[1].style.display = 'flex';
});
allButtons[3].addEventListener('click', function () {
    windowsPopUp[1].style.display = 'none';
});

allButtons[4].addEventListener('click', function () {
    windowsPopUp[2].style.display = 'flex';
});
allButtons[5].addEventListener('click', function () {
    windowsPopUp[2].style.display = 'none';
});

allButtons[6].addEventListener('click', function () {
    windowsPopUp[3].style.display = 'flex';
});
allButtons[7].addEventListener('click', function () {
    windowsPopUp[3].style.display = 'none';
});

allButtons[8].addEventListener('click', function () {
    windowsPopUp[4].style.display = 'flex';
});
allButtons[9].addEventListener('click', function () {
    windowsPopUp[4].style.display = 'none';
});


