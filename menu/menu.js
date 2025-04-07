const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menu4 = document.getElementById('menu4');


const lofiBox = document.querySelector('.box:nth-child(1)');
const popBox = document.querySelector('.box:nth-child(2)');

setActiveMenu(menu1)

function setActiveMenu(activeButton) {
    menu1.classList.remove('active');
    menu2.classList.remove('active');
    menu3.classList.remove('active');
    activeButton.classList.add('active');
}

function showAll() {
    setActiveMenu(menu1);
    lofiBox.style.display = 'block';
    popBox.style.display = 'block';
    menu4.classList.remove('active');
}

function showLofi() {
    setActiveMenu(menu2);
    lofiBox.style.display = 'block';
    popBox.style.display = 'none';
    menu4.classList.remove('active');
}

function showPop() {
    setActiveMenu(menu3);
    lofiBox.style.display = 'none';
    popBox.style.display = 'block';
    menu4.classList.remove('active');
}

function showFollow() {
    setActiveMenu(menu4);
    lofiBox.style.display = 'none';
    popBox.style.display = 'none';
}