var index = 0;
var slides = document.querySelectorAll(".sec-8_slide")
var slidescontainer = document.querySelector("#sec-8")

slides = Array.from(slides)

function showslides(n){
    if (index >(slides.length-1)){
        index=0;
    }
    if (index <0){
        index=slides.length-1;
    }
    slides.forEach(el => {
        el.style.display = "none";
    });

    slides[index].style.display = "flex"
    index++
    console.log(index)
}

setInterval(showslides,3000)
