// ======================================
// THE ARTIST DUO
// script.js
// ======================================

// ================= LOADER =================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.transition = "0.6s";

        }, 1000);

    }

});

// ================= MOBILE MENU =================

const menuBtn = document.getElementById("mobile-menu");

const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

}

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ================= SEARCH PRODUCTS =================

const searchInput = document.getElementById("searchInput");

const productCards = document.querySelectorAll(".product-card");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value = searchInput.value.toLowerCase();

productCards.forEach(card=>{

const text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// ================= SCROLL REVEAL =================

const revealElements=document.querySelectorAll(

".product-card,.feature,.order-card,.why-card,.testimonial-card,.contact-card,.counter-box,.about-image,.about-content"

);

const reveal=()=>{

const trigger=window.innerHeight*0.85;

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<trigger){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

};

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();

// ================= IMAGE LIGHTBOX =================

const galleryImages=document.querySelectorAll("img");

const lightbox=document.createElement("div");

lightbox.style.position="fixed";
lightbox.style.left="0";
lightbox.style.top="0";
lightbox.style.width="100%";
lightbox.style.height="100%";
lightbox.style.background="rgba(0,0,0,.9)";
lightbox.style.display="none";
lightbox.style.justifyContent="center";
lightbox.style.alignItems="center";
lightbox.style.zIndex="99999";

const lightImage=document.createElement("img");

lightImage.style.maxWidth="90%";
lightImage.style.maxHeight="90%";
lightImage.style.borderRadius="20px";

lightbox.appendChild(lightImage);

document.body.appendChild(lightbox);

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightImage.src=img.src;

lightbox.style.display="flex";

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});
// ======================================
// FLOATING WHATSAPP BUTTON
// ======================================

const whatsapp = document.createElement("a");

whatsapp.href =
"https://wa.me/917606856053?text=Hi! I'm interested in your crochet products.";

whatsapp.target = "_blank";

whatsapp.className = "floating-whatsapp";

whatsapp.innerHTML =
'<i class="fab fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

Object.assign(whatsapp.style,{
position:"fixed",
bottom:"25px",
right:"25px",
width:"65px",
height:"65px",
background:"#25D366",
color:"#fff",
borderRadius:"50%",
display:"flex",
justifyContent:"center",
alignItems:"center",
fontSize:"32px",
textDecoration:"none",
boxShadow:"0 10px 25px rgba(0,0,0,.25)",
zIndex:"9999",
transition:".3s"
});

whatsapp.onmouseover=()=>{

whatsapp.style.transform="scale(1.1)";

};

whatsapp.onmouseout=()=>{

whatsapp.style.transform="scale(1)";

};

// ======================================
// SCROLL TO TOP BUTTON
// ======================================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{
position:"fixed",
bottom:"100px",
right:"30px",
width:"55px",
height:"55px",
border:"none",
borderRadius:"50%",
background:"#e85d8e",
color:"white",
fontSize:"22px",
cursor:"pointer",
display:"none",
boxShadow:"0 10px 20px rgba(0,0,0,.2)",
zIndex:"9998"
});

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ======================================
// ANIMATED COUNTERS
// ======================================

const counters=document.querySelectorAll(".counter-box h2");

const runCounter=(counter)=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

if(counter.innerText.includes("%")){

counter.innerText="100%";

}else{

counter.innerText=target+"+";

}

}

};

update();

};

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ======================================
// FLOATING HEARTS
// ======================================

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

Object.assign(heart.style,{
position:"fixed",
left:Math.random()*100+"vw",
top:"-30px",
fontSize:(20+Math.random()*20)+"px",
pointerEvents:"none",
zIndex:"999",
transition:"5s linear"
});

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(110vh) rotate(360deg)";
heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},5000);

},1800);

// ======================================
// WELCOME POPUP
// ======================================

if(!localStorage.getItem("artistduo")){

setTimeout(()=>{

alert("🌸 Welcome to The Artist Duo!\n\nHandmade Crochet Gifts Made With Love ❤️");

},1200);

localStorage.setItem("artistduo","visited");

}

// ======================================
// STICKY NAVBAR EFFECT
// ======================================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(255,255,255,.97)";
navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.1)";

}else{

navbar.style.background="rgba(255,255,255,.85)";
navbar.style.boxShadow="none";

}

});

// ======================================
// FAQ ACCORDION
// ======================================

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const answer=item.querySelector("p");

answer.style.display="none";

item.style.cursor="pointer";

item.addEventListener("click",()=>{

const open=answer.style.display==="block";

document.querySelectorAll(".faq-item p").forEach(p=>{

p.style.display="none";

});

if(!open){

answer.style.display="block";

}

});

});

// ======================================
// END OF SCRIPT
// ======================================

console.log("✅ The Artist Duo Website Loaded Successfully!");