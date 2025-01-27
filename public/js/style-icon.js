class Styles extends Btns{
    replaceImg (){
        this.btns.forEach((element, i) => {
            element.addEventListener("mouseover", () => {
                if(this.imgs[i].name != 'active') this.imgs[i].src = `../assets/icons/light/icon-${this.imgs[i].name}-light.png`
            })
        })
        this.btns.forEach((element, i) => {
            element.addEventListener("mouseout", () => {
                if(this.imgs[i].name != 'active') this.imgs[i].src = `../assets/icons/dark/icon-${this.imgs[i].name}-dark.png`
            })
        })

    }

    setStyles () {
        this.replaceImg();
    }

}
const sty = new Styles ();
