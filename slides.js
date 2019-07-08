// Pick all of the images and layer them based on the z-index

const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")


// keep track of both the current slide and the z-index

let currentSlide = 0
let z = 1


// When I click the slide area, change slide based on z-index

slideArea.addEventListener("click", function(){

    currentSlide = currentSlide + 1

    if (currentSlide > images.length - 1){
        currentSlide = 0
    }


    z = z + 1


    // remove animation from the style for EVERY image

    images.forEach(image => {
        image.style.animation = ""
    })


    //pick the right image
    
    images[currentSlide].style.zIndex = z
    images[currentSlide].style.animation = "fade 0.5s"

})      





// Move images randomly on mouse over.

slideArea.addEventListener("mouseover", function() {
    
    images.forEach(image => {
        const x = 25 * (Math.floor(Math.random() * 5)) - 50
        const y = 25 * (Math.floor(Math.random() * 5)) - 50

        image.style.transform = `translate(${x}px, ${y}px)`


    })

})


// Puts images back in place

slideArea.addEventListener("mouseout", function() {

    images.forEach(image =>{
        image.style.transform = ""
    })

})