const items = document.querySelectorAll(".image-slider")
const nbSlide = items.length
const sliderOne = document.querySelector("#image-1")
const sliderTwo = document.querySelector("#image-2")
const sliderThree = document.querySelector("#image-3")
const sliderFour = document.querySelector("#image-4")
let count = 0


sliderOne.addEventListener("click",()=>{
    items[count].classList.remove('active')
    if (count < nbSlide -1) {
        count ++
    }else{
        count = 0
    }
    items[count].classList.add("active")
})

sliderTwo.addEventListener("click",()=>{
    items[count].classList.remove('active')
    if (count < nbSlide -1) {
        count ++
    }else{
        count = 0
    }
    items[count].classList.add("active")
})
sliderThree.addEventListener("click",()=>{
    items[count].classList.remove('active')
    if (count < nbSlide -1) {
        count ++
    }else{
        count = 0
    }
    items[count].classList.add("active")
})
sliderFour.addEventListener("click",()=>{
    items[count].classList.remove('active')
    if (count < nbSlide -1) {
        count ++
    }else{
        count = 0
    }
    items[count].classList.add("active")
})
