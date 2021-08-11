//$("body").fadeIn("slow");
var blogButton = document.getElementById("blog-button");
var aboutButton = document.getElementById("about-button");
var blogSection = document.getElementById("blog-section");
var aboutSection = document.getElementById("about-section");

$("#about-section").load("about-section.html")
aboutSection.style.display = "none"; // default

blogButton.addEventListener("click", postButtonPressed);
aboutButton.addEventListener("click", aboutButtonPressed);

// If dark-button selected, show the corresponding content
function aboutButtonPressed() {

    blogButton.classList.remove("button-dark");
    blogButton.classList.add("button-light");
    aboutButton.classList.remove("button-light");
    aboutButton.classList.add("button-dark");

    blogSection.style.display = "none";
    $("#about-section").fadeIn("slow");
}

function postButtonPressed() {

    console.log("changing post button color...");
    aboutButton.classList.remove("button-dark");
    aboutButton.classList.add("button-light");
    blogButton.classList.remove("button-light");
    blogButton.classList.add("button-dark");

    aboutSection.style.display = "none";
    $("#blog-section").fadeIn("slow");

}

// Show blog post
// $("#hidden-container").load("../blog-posts/test-2.html");
