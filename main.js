function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    if(this.scrolly>=200) scrollup.classList.add('show-scrll');else scrollup
}
window.addEventListener('scroll',scrollup)