console.log("Working");
// Create toggle button that display the rules when click the button
document.querySelector(".instructionHeading").addEventListener("click", () => { 
    
        let instructionText = document.querySelector(".instructionHeading").nextElementSibling;
        instructionText.classList.toggle("active");
        if (instructionText.classList.contains("active")) {
            instructionText.style.display = "block";
        } else {
            instructionText.style.display = "none";
        }
});