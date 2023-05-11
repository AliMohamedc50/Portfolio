

let widthBarSkill = document.querySelectorAll(".bar span")

widthBarSkill.forEach((bar) => {
    
    bar.style.width = bar.dataset.widthbar
    // console.log(bar.dataset.widthbar)
})