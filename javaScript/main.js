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

navLinks.forEach((linke) => 
    linke.onclick = function(e) {

        navLinks.forEach((aa) => {
            aa.classList.remove("active")
        })
        e.target.classList.add("active")
        e.preventDefault();
        document.querySelector(linke.dataset.scroller).scrollIntoView({
            behavior: 'smooth' 
        })
})

let widthBarSkill = document.querySelectorAll(".bar span")

widthBarSkill.forEach((bar) => {
    bar.style.width = bar.dataset.widthbar
})

let links = document.querySelectorAll("nav a")
links.forEach((ele) => {
        document.querySelector(ele.dataset.scroll).scrollIntoView({
            behavior : 'smooth'
        })
    // }
})
