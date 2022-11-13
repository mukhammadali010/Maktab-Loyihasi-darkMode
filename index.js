const head = document.getElementById('head');
const sidebar = document.getElementById('sidebar');
const menu = document.getElementById('btn');
const cards = document.getElementById("cards");

const card = document.querySelectorAll("#card");


const darkMode = document.getElementById('darkMode');
const moonsun = document.getElementById('moonsun');
const content = document.getElementById('content');

const toggle =()=>{
    if(sidebar.classList.contains("hide")) sidebar.classList.remove("hide");
    else sidebar.classList.add("hide");
};

menu.onclick =()=> toggle();


const show = document.getElementById('show');

const showing = (e)=>{
    console.log(e);
}

show.onclick =()=> showing();


const keyUp =(e)=>{
    if(e.key === "Escape") sidebar.classList.add("hide");
}

for (const card of cards.children) {

    card.children[0].onclick =()=>{
        const menu = card.children[0].innerHTML;
        show.innerHTML = menu;
    }

}


const sunMoon =()=>{
    if(moonsun.classList.contains('fa-moon')) { 
        moonsun.classList.remove('fa-moon');
        moonsun.classList.add('fa-sun');
    }
    
    else {
        moonsun.classList.remove('fa-sun');
        moonsun.classList.add('fa-moon');
    }  

    if(!head.classList.contains('dark')) {
        head.classList.add('dark');
        menu.style.color ='white';
        darkMode.style.color ='white';
        content.classList.add('darker');
        for(let i=0; i < card.length; i++){
            card[i].classList.add('darker1');
        }
        sidebar.style.background ="black"
    }
    else{
        head.classList.remove('dark');
        menu.style.color ='black';
        darkMode.style.color ='black';
        content.classList.remove('darker');
        for(let i=0; i < card.length; i++){
            card[i].classList.remove('darker1');
        }
        sidebar.style.background ="rgba(28, 28, 100, 0.925)"
    } 

    
}

darkMode.onclick =()=> sunMoon();