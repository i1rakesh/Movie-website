var preloader = document.getElementById("loading");
function loadingfunction() {
  preloader.style.display = "none";
}
let el = document.getElementById('Photo')
const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', handleMove)

function handleMove(e) {
    const xVal = e.layerX
    const yVal = e.layerX

    const yRotation = 10 * ((xVal - width / 2) / width)


    const xRotation = -10 * ((yVal - height / 2) / height)


    const string = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'


    el.style.transform = string
}


el.addEventListener('mouseout', function () {
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

el.addEventListener('mousedown', function () {
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})


el.addEventListener('mouseup', function () {
    el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})
{
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
}