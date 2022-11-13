const head = document.getElementById('head');
const sidebar = document.getElementById('sidebar');
const menu = document.getElementById('btn');
const cards = document.getElementById("cards");

const card = document.querySelectorAll("#card");
const showAddress = document.querySelectorAll('#showAddress');

const darkMode = document.getElementById('darkMode');
const moonsun = document.getElementById('moonsun');
const content = document.getElementById('content');
const rightSide = document.getElementById('rightside');
const tables = document.getElementById('table');

const toggle = () => {
    if (sidebar.classList.contains("hide")) sidebar.classList.remove("hide");
    else sidebar.classList.add("hide");
};

menu.onclick = () => toggle();


const show = document.getElementById('show');


const keyUp = (e) => {
    if (e.key === "Escape") sidebar.classList.add("hide");
}




const sunMoon = () => {
    if (moonsun.classList.contains('fa-moon')) {
        moonsun.classList.remove('fa-moon');
        moonsun.classList.add('fa-sun');
    }

    else {
        moonsun.classList.remove('fa-sun');
        moonsun.classList.add('fa-moon');
    }

    if (!head.classList.contains('dark')) {
        head.classList.add('dark');
        menu.style.color = 'white';
        darkMode.style.color = 'white';
        sidebar.style.background = "black"
        rightSide.classList.add('darker');
    }
    else {
        head.classList.remove('dark');
        menu.style.color = 'black';
        darkMode.style.color = 'black';
        sidebar.style.background = "rgba(28, 28, 100, 0.925)"
        rightSide.classList.remove('darker');

    }

}

darkMode.onclick = () => sunMoon();


const showAdd = (i) => {

    const info = [
        "Manzili : Toshkent shahar , Yunusobod , 23 / 12",
        "Manzili : Fargona viloyat , Qoshtepa , 23 / 12",
        "Manzili : Andijon viloyat , Qoshtepa , 23 / 12",
        "Manzili : Namangan viloyat , Qoshtepa , 23 / 12",
        "Manzili : Xorazim viloyat , Qoshtepa , 23 / 12",
        "Manzili : Navoiy viloyat , Qoshtepa , 23 / 12",
        "Manzili : Toshkent viloyat , Qoshtepa , 23 / 12",
        "Manzili : Buxoro viloyat , Qoshtepa , 23 / 12",

    ];
    switch (i) {
        case 0:
            alert(info[0])
            break;
        case 1:
            alert(info[1])
            break;

        case 2:
            alert(info[2])
            break;

        case 3:
            alert(info[3])
            break;
        case 4:
            alert(info[4])
            break;
        case 5:
            alert(info[5])
            break;
        case 6:
            alert(info[6])
            break;

        default:
            break;
    }
}

for (let i = 0; i < showAddress.length; i++) {
    showAddress[i].onclick = () => showAdd(i);
}