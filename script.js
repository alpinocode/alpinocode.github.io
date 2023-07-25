// toggle class active untuk hamburger menu
const navbarNav=document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}
// toggle class acctive untuk social media

const socialMedia = document.querySelector('.social-media');

document.querySelector('#social-media-button').onclick = (e) => {
    socialMedia.classList.toggle('active');
    e.preventDefault();
}

// toggle class active untuk search form
const searchForm= document.querySelector('.search-form');
const searchBox=document.querySelector('#search-button');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// toggle class active untuk shopping cart
const shoppingCart=document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) =>{
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}


// klik diluar elemen
const sm =document.querySelector('#social-media-button');
const sf= document.querySelector('#search-button');
const hm=document.querySelector('#hamburger-menu');
const sc=document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if(!sm.contains(e.target) && !socialMedia.contains(e.target)){
        socialMedia.classList.remove('active');
    }
    if(!sf.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
    
});

// modal box
const itemDetailModal=document.querySelector('#item-detail-modal');
const itemDetailButton=document.querySelector('.item-detail-button');

itemDetailButton.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display='flex';
        e.preventDefault();
    }
})

// klik tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display= 'none';
    e.preventDefault();
}

// klik di luar modal

window.onclick = (e) => {
    if (e.target === itemDetailModal){
        itemDetailModal.style.display='none';
    }
}


