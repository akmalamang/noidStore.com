const humb = document.querySelector('.humbuger');

humb.addEventListener('click', () => {
    getSpan();
});

//fungsi get
function getSpan() {
    //span1
    let spa_one = document.querySelector('.spa1');
    spa_one.classList.toggle('tambah');
    //span2
    let spa_two = document.querySelector('.spa2');
    spa_two.classList.toggle('scale-0');
    //span3
    let spa_three = document.querySelector('.spa3');
    spa_three.classList.toggle('tambah-2');
    //item
    let item = document.querySelector('.item');
    item.classList.toggle('anim');
}

//left
const kiri = document.querySelector('.kiri');
let bg = document.getElementById('home');
kiri.addEventListener('click', () => {
    bg.classList.replace("bg-[url('../img/parpum4.jpg')]", "bg-[url('../img/parpum3.jpg')]");
    kiri.addEventListener('click', () => {
        let bg = document.getElementById('home');
        bg.classList.replace("bg-[url('../img/parpum3.jpg')]", "bg-[url('../img/parpum2.jpg')]");
    });
});

//right
const kanan = document.querySelector('.kanan');
kanan.addEventListener('click', () => {
    bg.classList.replace("bg-[url('../img/parpum3.jpg')]", "bg-[url('../img/parpum4jpg')]");
    kanan.addEventListener('click', () => {
        let bg = document.getElementById('home');
        bg.classList.replace("bg-[url('../img/parpum2.jpg')]", "bg-[url('../img/parpum1.jpg')]");
    });
});

const shop = document.querySelectorAll('.harga span');
const cards = document.querySelectorAll('.card .title p');
const sallary = document.querySelectorAll('.harga p ');
let quanty = 0;

shop.forEach((a, index) => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const shop = document.querySelector('.shop');
        shop.setAttribute('class', 'shop w-2/3 fixed left-1/2 -translate-x-1/2 bg-dua pb-4 rounded-md px-3 bottom-1/2 scale-1 ');
        const namaProduk = document.querySelector('.nameProduct');
        const hargaCheout = document.querySelector('.tak .harga');
        const quantity = document.querySelector('.quantity');

        quantity.textContent = `${(quanty += 1)}`;
        namaProduk.textContent = cards[index].innerText;
        hargaCheout.textContent = sallary[index].textContent;

        const x = document.querySelector('.xei');
        x.addEventListener('click', (ai) => {
            ai.preventDefault();
            shop.classList.add('scale-0');
            quantity.textContent = `${(quanty -= quanty)}`;
        });
    });
});

// function hide() {
//     return (document.body.style.display = 'none');
// }
// hide();