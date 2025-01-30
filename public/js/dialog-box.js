class Dialog {
    constructor () {
        this.mainTag = document.getElementsByTagName('main');
        this.dialogTag = document.getElementsByClassName('dialogBox');
        this.body = document.body;
        this.formTag = document.getElementById('action-type-dialog');
        this.btnCloseDialog = document.getElementsByClassName('btn-close-dialog');
        this.btnSaveDialog = document.getElementsByClassName('btn-save-dialog');
        this.saveConfig = { headers: { 'Content-Type' : 'application/json'} };
    }

    async save () {

    }


    applyStyleMainTag() {
        this.mainTag[0].classList.add("blocked");
    }
    
    removeStyleMainTag() {
        this.mainTag[0].classList.remove("blocked");
    }

    createDialog () {
        this.body.innerHTML += `
        <section class="dialogBox">
            <div class="container">
                <section class="config-display-dialog">
                    <div class="row">
                        <div class="title col-md-12 p-0">
                            <h1>CRIAR MESA +</h1>
                        </div>
                    </div>
                </section>
                <section class="config-display-dialog">
                    <div class="row">
                        <div class="col-md-12 p-0">
                            <form id="action-type-dialog">
                                <div class="desksUnavailable"></div>
                                <label for="ipt-desk-number">Número da mesa: </label>
                                <input type="number" id="ipt-desk-number">
                                <label for="select-desk-status">Status: </label>
                                <select name="" id="select-desk-status">
                                    <option value="Aberta">Aberta</option>
                                    <option value="Fechada">Fechada</option>
                                </select>
                            </form>

                        </div>
                        
                    </div>
                </section>
                <section class="config-display-dialog">
                    <div class="row div-btn-close-dialog">
                        <div class="col-md-12 p-0 div-btns-dialog">
                            <button class="btn-save-dialog">SALVAR</button>
                            <button class="btn-close-dialog">FECHAR</button>
                        </div>
                    </div>
                </section>        
            </div>
        </section>
        `
    }

    removeDialog () {
        this.body.removeChild(this.dialogTag[0]);
    }

    enableDialog () {
        this.dialogTag[0].style.display = 'flex';
        this.applyStyleMainTag();
        this.enableEvents();
    }

    disableDialog () {
        this.dialogTag[0].style.display = 'none';
        this.removeStyleMainTag();

        setTimeout(() => {
            this.removeDialog();
            document.dispatchEvent(new Event("dialogClosed"));
        }, 50);
    }
    
    enableEvents () {
        this.btnCloseDialog[0].addEventListener("click", () => {
            this.disableDialog();
        });
        this.btnSaveDialog[0].addEventListener("click", async () => {
            await this.save();
            this.disableDialog();
        });

    }

    type (i) {
        this.createDialog();
        this.enableDialog();

    }

}
const dialog = new Dialog ();
