

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

// 按下Toggle時的變化
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}


// 回上層按鈕
window.onscroll=()=>{
if(window.scrollY>60){
    document.querySelector('#scrollUp').classList.add('active');
}else{
    document.querySelector('#scrollUp').classList.remove('active');
}

}
