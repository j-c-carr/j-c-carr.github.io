$("body").fadeIn("slow");
var blogButton = document.getElementById("blog-button");
var aboutButton = document.getElementById("about-button");

//blogButton.addEventListener("click", toggleMainSection(blogButton));
//aboutButton.addEventListener("click", toggleMainSection(aboutButton));

// If dark-button selected, show the corresponding content
function toggleButtonColor() {

    console.log("changing button color...");
    blogButton.classList.toggle("button-dark");
    blogButton.classList.toggle("button-light");
    aboutButton.classList.toggle("button-dark");
    aboutButton.classList.toggle("button-light");

}

// Show blog post
// $("#hidden-container").load("../blog-posts/test-2.html");
