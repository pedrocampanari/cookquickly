class Btns {
    constructor() {
        this.btns = document.querySelectorAll('.btn-nav');
        this.imgs = document.querySelectorAll('.icon-img')
    }
    enableButtons () {
        this.btns[0].addEventListener("click", ()=> window.location.href = '/orders');
        this.btns[1].addEventListener("click", ()=> window.location.href = '/delivery');
        this.btns[2].addEventListener("click", ()=> window.location.href = '/desks');
        this.btns[3].addEventListener("click", ()=> window.location.href = '/sales');
        this.btns[4].addEventListener("click", ()=> window.location.href = '/menu');
        this.btns[5].addEventListener("click", ()=> window.location.href = '/dashboard');
        this.btns[6].addEventListener("click", ()=> window.location.href = '/settings');
    }

}
const buttons = new Btns ();
