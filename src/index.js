import styles from './styles.css';


console.log("hello");
// 圖片輪播
window.onload = roll(50);

function roll(t) {
    let ul1 = document.querySelector('#comment1');
    let ul2 = document.querySelector('#comment2');
    let moveStill = document.querySelector('.show-box');
    ul2.innerHTML = ul1.innerHTML;
    moveStill.scrollTop = 0;
    var timer = setInterval(rollStart, t);

    moveStill.addEventListener('mouseover', function () {
        clearInterval(timer);
    });
    moveStill.addEventListener('mouseout', function () {
        timer = setInterval(rollStart, t)
    });

}

function rollStart() {
    let ul1 = document.querySelector('#comment1');
    let ul2 = document.querySelector('#comment2');
    let moveStill = document.querySelector('.show-box');

    if (moveStill.scrollTop >= ul1.scrollHeight) {
        moveStill.scrollTop = 0;
    } else {
        moveStill.scrollTop++;
    }
};

let btn = document.querySelector('.footer-btn');
let mySkill = document.querySelector('.skill');
let main = document.querySelector('#test-main');

btn.addEventListener('click', toggle);


function toggle() {    

    if (mySkill.style.height == "360px") {
        mySkill.style.height = "0px";
        main.style.marginBottom = "0px";
    } else {
        mySkill.style.height = "360px";
        main.style.marginBottom = "360px";
    }
}






