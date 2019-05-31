const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")
const navTag = document.querySelector("nav")

// When I click the toggle tag, toggle a class of open on the main tag. If it's open, the toggletag says close and viceversa.

toggleTag.addEventListener("click", function() {

    mainTag.classList.toggle("open")
    navTag.classList.toggle("open")


    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = '<img src="assets/close.svg"> Close'
    } else {
        toggleTag.innerHTML = '<img src="assets/menu.svg"> Menu'
    }

    
})