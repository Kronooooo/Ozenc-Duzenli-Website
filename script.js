function showLinks() {
    var x = document.getElementById("my-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function changeImage(image) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = image.src;
    expandImg.parentElement.style.display = "block";
}