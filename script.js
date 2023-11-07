let were = document.getElementById("were")
let bord = document.getElementById("bord")
let walk = document.getElementById("walk")
let doggy = document.getElementById("doggy")
let my = document.getElementById("my")
let walk2 = document.getElementById("walk2")
let dog = document.getElementById("dog")
let cat = document.getElementById("cat")
// imges

let bigimg = document.getElementById("bigimg")
let secimg = document.getElementById("secimg")


cat.addEventListener("click", ()=>{



    bigimg.src = "https://i.ytimg.com/vi/nMMPCVgD-BQ/maxresdefault.jpg"
    secimg.src = "https://petkeen.com/wp-content/uploads/2021/04/cat-enjoying-cuddle-1024x679-1.jpeg"

    walk.innerText = "Cat walking"
    were.innerText = "We're The Cat People"
    bord.innerText = "Cat Boarding"
    walk2.innerText = "Whenever your cat needs a walk."
    doggy.innerText = "Cat Day Care"
    my.innerText = "My Rover sitter sent me updates throughout the day and took care of my cat as if she were her own"


})

dog.addEventListener("click", ()=>{

    bigimg.src = "https://www.fitdog.com/wp-content/uploads/2018/04/Untitled-design-15-1024x576.jpg"
    secimg.src = "https://blog.digatherm.infraredcameras.com/hubfs/Imported_Blog_Media/Cuddle-Day-12-6-2021_veterinary-blog-news.jpg"

    walk.innerText = "Dog walking"
    were.innerText = "We're The Dog People"
    bord.innerText = "Dog Boarding"
    walk2.innerText = "Whenever your cat needs a walk."
    doggy.innerText = "Doggy Day Care"
    my.innerText = "My Rover sitter sent me updates throughout the day and took care of my Dog as if she were her own"


})