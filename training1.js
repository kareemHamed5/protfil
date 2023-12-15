let color = document.querySelectorAll('.colors .color div')
let ull = document.getElementById('ul')
let exit = document.getElementById('arow')
let min_heder = document.getElementById('min_hedear')
let icons= document.getElementById('icons')
let set =document.getElementById('sit');
let su =document.getElementById('sun');
let hed =document.querySelector('.hedear')
let a = document.querySelectorAll(".header .nav ul li a")


a.forEach((ele) => {
    ele.onclick = function () {
        document.querySelector('.active').classList.remove('active')
        ele.classList.add('active')
    }
}); 



set.onclick = function () {
    icons.classList.toggle('act-co')
}
color.forEach((ele) => { 
    ele.onclick = () => {
        let deta = ele.getAttribute("data-color")
        window.localStorage.setItem('data-color', deta)
        document.documentElement.style.setProperty('--color-or', deta)
    }
})


if (window.localStorage.getItem('data-color') ){
    document.documentElement.style.setProperty('--color-or', window.localStorage.getItem('data-color'))
}

su.onclick = function () {
    document.body.classList.toggle('dark')
}
let span_typing = document.querySelector('.container .left h2 span')

let typing =_=> {
setTimeout(() => {
    span_typing.innerHTML='Front End '
}, 0);
setTimeout(() => {
    span_typing.innerHTML='back end'
}, 4000);
setTimeout (() => {
    span_typing.innerHTML='full stak'
}, 8000);
setTimeout(() => {
    span_typing.innerHTML='ui/ux design'
}, 12000);
}

typing()
setInterval(typing,12000) 



document.querySelector(".wid .fa-arrow-right").addEventListener("click", (e) => {
    document.querySelector(".wid .fa-arrow-right").classList.toggle("i-act")
    document.querySelector(".header").classList.toggle("head-act")
})


















/*
    Array Methods
    - Array.every(CallbackFunc(Element, Index, Array), This Argument)
    --- CallbackFunc => Function To Run On Every Element On The Given Array
    ------ Element => The Current Element To Process
    ------ Index => Index Of Current Element
    ------ Array => The Current Array Working With
    --- This Argument => Value To Use As This When Executing CallbackFunc
    --
*/

const locations = {
    20: "Place 1",
    30: "Place 2",
    50: "Place 3",
    40: "Place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations);



let locationArrayNumbers = locationsArray.map((n) => +n);


let check = locationArrayNumbers.every(function (e) {
    return e > this;
}, mainLocation);

