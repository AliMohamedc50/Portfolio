

let widthBarSkill = document.querySelectorAll(".bar span")


// let skills = document.querySelector(".skills")

// window.onscroll = function () {
//     let widthBarSkillOffsetTop = widthBarSkill.offsetTop;

//     let widthBarSkillOuterHeight = widthBarSkill.offsetHeight;

//     let windowHeight = this.innerHeight ;

//     let windoScrollTop = this.pageYOffset ;

//     if(windoScrollTop > (widthBarSkillOffsetTop + widthBarSkillOuterHeight - windowHeight)) {
//         widthBarSkill.forEach((bar) => {
//             bar.style.width = bar.dataset.widthbar;
//         })
//     }
// }


widthBarSkill.forEach((bar) => {
    
    bar.style.width = bar.dataset.widthbar
    // console.log(bar.dataset.widthbar)
})