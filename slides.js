// Pick all of the images and layer them based on the z-index

const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// 

let currentSlide = 0
let z = 1


// When I click the slide area, change slide based on z-index

slideArea.addEventListener("click", function(){

    currentSlide = currentSlide + 1

    if (currentSlide > images.length - 1){
        currentSlide = 0
    }


    z = z + 1

    //pick the right image
    images[currentSlide].style.zIndex = z
    images[currentSlide].style.animation = "fade 0.5s"


})