const { exec } = require('child_process');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');


//Routes
const menuRoutesGet = require('./src/routes/get/menuRoutesGet');
const desksRoutesGet = require('./src/routes/get/desksRoutesGet');

const { DeskSchema, DeliverySchema, OrderSchema } = require('./src/database/models/schemas');

const Desk = mongoose.model('Desks', DeskSchema);
const Delivery = mongoose.model('Deliveries', DeliverySchema);
const Order = mongoose.model('Orders', OrderSchema);


class Server {
    constructor() {
        this.port = 5500;
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = socketIO(this.server);
    }

    enableRoutes() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(menuRoutesGet);
        this.app.use(desksRoutesGet);
        this.app.use(cors())
    }

    rootRoute() {
        this.app.get('/', (req, res) => {
            res.redirect('/dashboard');
        });
    }

    startWebSocket() {
        this.io.on('connection', (socket) => {
            console.log('Client connected: ' + socket);

            // Desk.watch().on('change', (change) => {

            //     console.log('change', change);
            //     if (change.operationType === 'insert') {
            //         io.emit('newMessage', change.fullDocument);
            //     }
            // });
        });
    }

    startDatabase() {
            mongoose.connect('mongodb://localhost:27017/cookquickly').then(() => {
                console.log('Connected to database');
            }).catch(err => {
                console.log('Error connecting to database:', err);
            });
        }

    listenServer() {
            this.server.listen(this.port, '0.0.0.0', async () => {
                console.log(`Server is running on port ${this.port}`);
                //exec(`start http://127.0.0.1:${this.port}`);
            });
        }

    start() {
            this.enableRoutes();
            this.rootRoute();
            this.listenServer();
            this.startDatabase();
            this.startWebSocket();
        }
}

    const server = new Server();
server.start();


