const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const navLinks = document.querySelectorAll(".nav-link");


// Mobile menu
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});


// Close mobile menu after clicking a link
navLinks.forEach(link => {
    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        sidebar.classList.remove("open");
    });
});


// Highlight menu item while scrolling
const sections = document.querySelectorAll("section[id], .event-block[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
function toggleNavGroup(button) {
    const currentGroup = button.parentElement;

    document.querySelectorAll(".nav-group").forEach(group => {
        if (group !== currentGroup) {
            group.classList.remove("open");
        }
    });

    currentGroup.classList.toggle("open");
}