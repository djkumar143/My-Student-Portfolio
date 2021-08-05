
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const a1 = document.getElementById('a-1');
const a2 = document.getElementById('a-2');
const a3 = document.getElementById('a-3');
const a4 = document.getElementById('a-4');
const a5 = document.getElementById('a-5');

const  navItems = [nav1,nav2,nav3,nav4,nav5];
const linkItems = [a1,a2,a3,a4,a5];


function navAnimation(direction1,direction2){
    navItems.forEach((nav,i)=>{
        nav.classList.replace(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`)
    })
}

function toggleNav(){
    //toggle menu bars open/closed
    menuBars.classList.toggle('change');
    //toggle:menu active
    overlay.classList.toggle('overlay-active')
    if(overlay.classList.contains('overlay-active')){
        //animate in - overlay
        // overlay.classList.remove('overlay-slide-left')
        // overlay.classList.add('overlay-slide-right')
        //when doing in only one line, then need to add the class "overlay-slide-left in the overlay div, because by default , the class will be overlay-active"
        overlay.classList.replace('overlay-slide-left','overlay-slide-right')
        //animate in nav items
        //here also when doing in one line , then we need to add the class in the li which will slide it out of the page
        // nav1.classList.remove('slide-out-1')
        // nav1.classList.add('slide-in-1')
        // nav2.classList.remove('slide-out-2')
        // nav2.classList.add('slide-in-2')
        // nav3.classList.remove('slide-out-3')
        // nav3.classList.add('slide-in-3')
        // nav4.classList.remove('slide-out-4')
        // nav4.classList.add('slide-in-4')
        // nav5.classList.remove('slide-out-5')
        // nav5.classList.add('slide-in-5')

        navAnimation('out','in');

    }else{
        //animate out - overlay
        // overlay.classList.remove('overlay-slide-right')
        // overlay.classList.add('overlay-slide-left')
        overlay.classList.replace('overlay-slide-right','overlay-slide-left')
          //animate out nav items
        //   nav1.classList.remove('slide-in-1')
        //   nav1.classList.add('slide-out-1')
        //   nav2.classList.remove('slide-in-2')
        //   nav2.classList.add('slide-out-2')
        //   nav3.classList.remove('slide-in-3')
        //   nav3.classList.add('slide-out-3')
        //   nav4.classList.remove('slide-in-4')
        //   nav4.classList.add('slide-out-4')
        //   nav5.classList.remove('slide-in-5')
        //   nav5.classList.add('slide-out-5')

        navAnimation('in','out')
    }
}

function playAudio(){
    var aud = new Audio("./audio/click.wav")
    aud.play();
    aud.currentTime=0;

}

menuBars.addEventListener('click',toggleNav);
// nav1.addEventListener('click', toggleNav);
// nav2.addEventListener('click', toggleNav);
// nav3.addEventListener('click', toggleNav);
// nav4.addEventListener('click', toggleNav);
// nav5.addEventListener('click', toggleNav);
navItems.forEach((nav)=>{
    nav.addEventListener('click',toggleNav);
})

// nav1.addEventListener('mouseover',playAudio);
// nav2.addEventListener('mouseover',playAudio);
// nav3.addEventListener('mouseover',playAudio);
// nav4.addEventListener('mouseover',playAudio);
// nav5.addEventListener('mouseover',playAudio);

linkItems.forEach((link)=>{
    link.addEventListener('mouseover',playAudio)
})





