/* ======================================================
   Zeyan Traders V6.0
   Script Part 1
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       LOADER
    ========================= */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if(loader){

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },500);

        }

    });

    /* =========================
       DARK / LIGHT MODE
    ========================= */

    const themeBtn = document.getElementById("themeToggle");

    const body = document.body;

    if(localStorage.getItem("theme") === "light"){

        body.classList.add("light");

        if(themeBtn){

            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        }

    }

    if(themeBtn){

        themeBtn.addEventListener("click",()=>{

            body.classList.toggle("light");

            if(body.classList.contains("light")){

                localStorage.setItem("theme","light");

                themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

            }

            else{

                localStorage.setItem("theme","dark");

                themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

            }

        });

    }

    /* =========================
       BACK TO TOP
    ========================= */

    const topBtn = document.getElementById("backToTop");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 400){

            topBtn.style.display="flex";

        }

        else{

            topBtn.style.display="none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});
/* ======================================================
   Zeyan Traders V6.0
   Script Part 2
====================================================== */

/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

if(menuBtn && navMenu){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}

/* =========================
   PRODUCT SEARCH
========================= */

const searchInput = document.getElementById("productSearch");

const productCards = document.querySelectorAll(".product-card");

if(searchInput){

    searchInput.addEventListener("keyup",()=>{

        const value = searchInput.value.toLowerCase();

        productCards.forEach(card=>{

            const text = card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display="block";

            }

            else{

                card.style.display="none";

            }

        });

    });

}

/* =========================
   STICKY NAVBAR EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
/* ======================================================
   Zeyan Traders V6.0
   Script Part 3
====================================================== */

/* =========================
   COUNTER ANIMATION
========================= */

const statCards = document.querySelectorAll(".stat-card h2");

const animateCounter = (element) => {

    const raw = element.textContent.replace("+", "");

    const target = parseInt(raw, 10);

    if (isNaN(target)) return;

    let current = 0;

    const increment = Math.max(1, Math.ceil(target / 100));

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.textContent = current + "+";

    }, 20);

};

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, { threshold: 0.4 });

statCards.forEach(card => counterObserver.observe(card));

/* =========================
   SCROLL REVEAL
========================= */

const revealItems = document.querySelectorAll(
    ".category-card,.product-card,.why-card,.testimonial-card,.gallery-item,.about-content,.about-image,.stat-card"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, { threshold: 0.15 });

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all .7s ease";

    revealObserver.observe(item);

});

/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.background = "rgba(0,0,0,.92)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.cursor = "zoom-out";
        overlay.style.zIndex = "999999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "92%";
        image.style.maxHeight = "92%";
        image.style.borderRadius = "18px";

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});

/* =========================
   CURRENT YEAR
========================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("Zeyan Traders V6.0 Loaded Successfully");
