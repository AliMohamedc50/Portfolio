

let sections = document.querySelectorAll("section")
let navLinks = document.querySelector("header nav a")


window.onscroll = () => {




    sections.forEach((sec) => {
        let top = window.scrollY ;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // let .offsetHeight;

        if (top >= offset && top < offset + height) {
            // active navbar Links
            navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    }
    // let header = document.querySelector("header")

    // header.classList.toggle("sticky", window.scrollY > 100)

})
}



let widthBarSkill = document.querySelectorAll(".bar span")

widthBarSkill.forEach((bar) => {
    bar.style.width = bar.dataset.widthbar
})

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