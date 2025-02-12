document.querySelector(".google-btn").addEventListener("click", function() {
    alert("Google login is not implemented in this demo.");
});

document.querySelector(".email-btn").addEventListener("click", function() {
    alert("Email login is not implemented in this demo.");
});

document.querySelector(".work-email-btn").addEventListener("click", function() {
    alert("Work email signup is not implemented in this demo.");
});
document.addEventListener("DOMContentLoaded", function () {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownContent.classList.toggle("show");
    });

    // Close dropdown if clicking outside
    window.addEventListener("click", function (event) {
        if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});