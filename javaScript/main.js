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

function sendMail() {
    var params = { 
        from_name : document.getElementById("from_name").value,
        email_id : document.getElementById("email_id").value,
        mobile_number : document.getElementById("mobile_number").value,
        email_subject : document.getElementById("email_subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_tuhn89h", "template_ma3p18g", params ).then(function (res) {
        alert("success!" + res.status);
    })
}

let sub = document.querySelector(".btn")

sub.onclick = function (e) { 
    e.preventDefault();
}
