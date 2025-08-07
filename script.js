const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const backDrop = document.getElementById("active-close");
const body = document.body;

const closeSidebarAndBackDrop = () => {
    console.log("hi i get clicked");
    nav.classList.remove("active");
    backDrop.classList.add("back-drop-hide");
    body.style.overflow = "auto"; 
};

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
        backDrop.classList.add("back-drop-hide");
        body.style.overflow = "auto";
    });
}

if (bar) {
    backDrop.classList.add("back-drop-hide");
    bar.addEventListener("click", () => {
        nav.classList.add("active");
        backDrop.classList.remove("back-drop-hide");
        body.style.overflow = "hidden"; 
    });
}

