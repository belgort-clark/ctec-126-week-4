// script.js

function nomeatballs() {
    let meatballs = document.getElementsByClassName('meatball');

    while (meatballs[0]) {
        meatballs[0].parentNode.removeChild(meatballs[0]);
    }
}

window.onload = function(){
    let section1 = document.getElementById('sec1');

    for (let i = 0; i < 10; i++) {
        let newPara = document.createElement('p');
        newPara.innerText = "I like pizza";
        newPara.className = 'meatball';
        section1.appendChild(newPara);    
    }
}



// let p = document.getElementsByTagName('a');

// for (let index = 0; index < p.length; index++) {
//     p[index].className = 'meatball';
//     p[index].classList.remove('meatball');
//     p[index].setAttribute('data-bruce','pizza');
//     p[index].href = 'http://clark.edu';
//     let thing = p[index].href;
// }

// let sec1 = document.getElementById('sec1');
// let p = sec1.getElementsByTagName('p');

// let p = document.getElementById('sec1').getElementsByTagName('p');

// let p = document.getElementsByTagName('li');
// let p = document.getElementsByTagName('li');
// let p = document.getElementsByClassName('thing1');
// let p = document.querySelectorAll('.thing1');
// let p = document.querySelectorAll('.thing1');

// for (let index = 0; index < p.length; index++) {
//     // alert(p[index].innerHTML);
//     p[index].style.padding = '3em';
//     p[index].style.fontSize = '3em';
//     p[index].style.textAlign = 'center';
//     p[index].style.border = '5px solid black';
//     p[index].style.background = 'pink';
// }
