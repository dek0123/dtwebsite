function toggleMenu() {
    var menu = document.getElementById("menu");
    console.log(menu.style.display);  // Debugging: Check the current display value

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Wait for 3 seconds, then add the 'loaded' class to the body
    setTimeout(function() {
        document.body.classList.add('loaded');
        // Hide the intro element after the transition
        document.getElementById("intro").style.display = "none";
    }, 3000); // Adjust the time if needed
});