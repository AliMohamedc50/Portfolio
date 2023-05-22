// get icon nav 
let menuIcon = document.getElementById("menu-icon")
let navbar = document.querySelector(".navbar")

let ghostNav = document.querySelector(".ghost")

let navbarA = document.querySelectorAll(".navbar a")


menuIcon.addEventListener("click", closeNave )

navbarA.forEach((ee) => {
    ee.addEventListener("click", closeNave )
})



function closeNave()  {
    navbar.classList.toggle("active")
    ghostNav.classList.toggle("active")
}


let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header .navbar a")


// console.log(navLinks)
navLinks.forEach((linke) => 
    linke.onclick = function(e) {
        // linke.addEventListener("click", closeNave )

        navLinks.forEach((aa) => {
            aa.classList.remove("active")
        })
        e.target.classList.add("active")
        e.preventDefault();
        document.querySelector(linke.dataset.scroller).scrollIntoView({
            behavior: 'smooth' 
        })
})







// window.onscroll = () => {

//     sections.forEach((sec) => {
//         let top = window.scrollY ;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         // let .offsetHeight;
//         if (top >= offset && top < offset + height) {
//             // active navbar Links
//             navLinks.forEach((links) => {
//             links.classList.remove('active');
//             document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//         });
//     }
//     // let header = document.querySelector("header")

//     // header.classList.toggle("sticky", window.scrollY > 100)

// })
// }



// let widthBarSkill = document.querySelectorAll(".bar span")

// widthBarSkill.forEach((bar) => {
//     bar.style.width = bar.dataset.widthbar
// })

// let links = document.querySelectorAll("nav a")
// links.forEach((ele) => {
//     // ele.onclick = function(e) {
//     //     links.forEach((mm) => {
//     //         mm.classList.remove("active")
//     //     })
//     //     ele.classList.add("active")
//         document.querySelector(ele.dataset.scroll).scrollIntoView({
//             behavior : 'smooth'
//         })
//     // }
// })

// console.log(links)