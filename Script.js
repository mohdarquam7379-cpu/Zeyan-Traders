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
