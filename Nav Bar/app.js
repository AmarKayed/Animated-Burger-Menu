const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
const navLinks = document.querySelectorAll(".links li");
burger.addEventListener("click",()=>{
    links.classList.toggle("links-active");

    navLinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation="";
        }
        else{
            link.style.animation = `fade-link 0.2s ease-in forwards ${index/7}s`;
        }
    });

    burger.classList.toggle("toggle");

});

const line = document.querySelectorAll(".burger div");
console.log(line);

burger.addEventListener("mouseover",()=>{
    for(let i=0;i<line.length;i++)
        line[i].style.backgroundColor="white";
});

burger.addEventListener("mouseleave",()=>{
    for(let i=0;i<line.length;i++)
        line[i].style.backgroundColor="rgb(253, 222, 222)";
});


const text=document.querySelector(".text");
const sunset=document.querySelector(".sunset");
const sunsetTitle=document.querySelector(".sunsetTitle");
let scroll=0;

// window.addEventListener("scroll",()=>{
//     if((document.body.getBoundingClientRect()).top > scroll)
//         text.classList.add("text-up");
//     else if((document.body.getBoundingClientRect()).top < scroll)
//         text.classList.add("text-down");
//     scroll=(document.body.getBoundingClientRect()).top;
//     console.log((document.body.getBoundingClientRect()).top);
// });


window.addEventListener("scroll",()=>{
    if((document.body.getBoundingClientRect()).top < scroll){
        //text.setAttribute("style","animation=textScroll 1.2s ease-in-out;");
        text.style.animation="textScroll 1.2s ease-in-out";
        sunset.style.animation="imageAppear 1.2s ease-in-out";
        sunsetTitle.style.animation="titleUp 0.9s ease-in-out";
    }    
    else if((document.body.getBoundingClientRect()).top > scroll){
        //text.setAttribute("style","animation=textScroll 1.2s ease-in-out alternate-reverse;");
        //text.style.animation="textScroll 1.2s ease-in-out reverse";
        text.style.animation="textScrollReverse 1.2s ease-in-out";
        sunset.style.animation="imageAppearReverse 1.2s ease-in-out";
        sunsetTitle.style.animation="titleDown 0.9s ease-in-out";
    }
    text.style.animationFillMode="forwards";    
    sunset.style.animationFillMode="forwards";
    sunsetTitle.style.animationFillMode="forwards";
    scroll=(document.body.getBoundingClientRect()).top;

    // console.log((document.body.getBoundingClientRect()).top);
});

// window.addEventListener("scroll",()=>{
//     text.classList.add("text-active");

// });