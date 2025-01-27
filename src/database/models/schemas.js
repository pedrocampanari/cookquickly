const mongoose = require('mongoose');
const { Schema } = mongoose;

const DeskSchema = new Schema({
    num: Number,
    orders: Array,
    status: String,
    date: Date,
    total: Number
});

const DeliverySchema = new Schema({
    num: Number,
    orders: Array,
    status: String,
    date: Date,
    total: Number
});

const OrderSchema = new Schema({
    num: Number,
    orders: Array,
    status: String,
    date: Date,
    total: Number
});

const shoppingListSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Referência ao usuário
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number
        }
    ]
});



module.exports = { DeskSchema, DeliverySchema, OrderSchema }

