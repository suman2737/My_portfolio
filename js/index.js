/* Navigation bar function*/

function myMenuFunction(){
    var menuBtn=document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    }else{
        menuBtn.className = "nav-menu";
    }
}
/*Add Shadow on navigation bar while scrolling*/
window.onscroll=function(){headerShadow()};

function headerShadow(){
    const navHeader=document.getElementById("header");

    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        navHeader.style.boxShadow="0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height="70px";
        navHeader.style.lineHeight="70px";
    } else{
        navHeader.style.boxShadow="none"
        navHeader.style.height="90px"
        navHeader.style.lineHeight="90px"
    }
}

/* Typing effect*/
var typingEffect=new Typed(".typedText",{
    strings : ["Web Designer"],
    loop :true,
    typedSpeed: 100,
    backSpeed:80,
    backDelay:2000
})

/* Scroll reveal animation */
const sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
})

/* Home */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay:100})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-text-btn',{delay:200})
sr.reveal('.social_icons',{delay:200})
sr.reveal('.featured-image',{delay:300})

/* Project Box */
sr.reveal('.project-box',{interval:200})

/* Heading */
sr.reveal('.top-header',{})

/* About Info & Contact Info*/
const srLeft=ScrollReveal({
    origin:'left',
    distace:'80px',
    duration:2000,
    reset:true
})

srLeft.reveal('.about-info',{delay:100})
srLeft.reveal('.contact-info',{delay:100})

/** About Skill & From Box*/
const srRight=ScrollReveal({
    origin:'right',
    distace:'80px',
    duration:2000,
    reset:true
})
srRight.reveal('.skills-box',{delay:100})
srRight.reveal('.form-control',{delay:100})

/* Change Active Link */
const sections=document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.scrollY;
    
    sections.forEach(current =>{
        const sectionHeight=current.offsetHeight,
         sectionTop=current.offsetTop - 50,
        sectionId=current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


