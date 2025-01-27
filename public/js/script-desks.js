class ScriptConfigDesks {

    constructor() {
        this.cotainersClass = document.getElementsByClassName('desks-list');
        this.itemsNotFoundClass = document.getElementsByClassName('itemsNotFound');
        this.desksList = document.getElementById('desks-list');
        this.desks = [];
        this.openDesks = 0;
        this.closedDesks = 0;
    }

    async request(method, url, body = '') {
        const options = {
            method: method,
            headers: { 'Content-Type': 'application/json' },
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async getDesks() {
        this.resetContainers();
        try {
            const json = await this.request('GET', '/getAllDesks');
            this.desks = json;
            console.log(json);
            if (Array.isArray(json)) {

                if (json.length == 0) {
                    this.resetContainers();
                } else{
                    json.forEach(element => {
                        this.printDesk(element);

                    });
                }
            } else {
                console.error('A resposta não é um array válido');
            }
        } catch (error) {
            console.error('Erro ao obter as mesas:', error);
        }
    }

    async createDesk(desk) {
        try {
            const response = await fetch('/createDesk/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(desk)
            });
            const data = await response.json();
            return data;
        } catch (err) {
            console.error(err);
        }
    }




    enableBtns() {
        const btnsDesk = document.getElementsByClassName('btn-command');

        
            btnsDesk[0].addEventListener('click', () => {
                dialog.type('i');
            });
       




















    }


    printDesk(element) {
        if (element.status) {
            if (this.itemsNotFoundClass[0] && this.openDesks == 0) {
                this.cotainersClass[0].removeChild(this.itemsNotFoundClass[0]);
            }

            this.openDesks++;

            return this.cotainersClass[0].innerHTML += `
                <button class="desk-item" id="${element._id}">
                    <span class="span-number-desk">${element.num}</span>
                    <span class="span-status-desk open">ABERTA</span>
                </button>
            `;
        } else if (!element.status) {
            if (this.itemsNotFoundClass[1] && this.closedDesks == 0) {
                this.cotainersClass[1].removeChild(this.itemsNotFoundClass[1]);
            }

            this.closedDesks++;

            return this.cotainersClass[1].innerHTML += `
                <button class="desk-item" id="${element._id}">
                    <span class="span-number-desk">${element.num}</span>
                    <span class="span-status-desk closed">FECHADA</span>
                </button>`
        } 
        return;
    }

    resetContainers() {
        this.openDesks = 0;
        this.closedDesks = 0;
        this.cotainersClass[0].innerHTML = `
                <div class="itemsNotFound">
                    <p>Nenhuma mesa aberta encontrada.</p>
                </div>
            `;
        this.cotainersClass[1].innerHTML = `
                <div class="itemsNotFound">
                    <p>Nenhuma mesa aberta encontrada.</p>
                </div>
            `;
    }

    run() {
        this.enableBtns();
        this.getDesks();
    }
}

const script = new ScriptConfigDesks();
script.run();