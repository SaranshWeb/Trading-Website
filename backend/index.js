require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors');

const {HoldingsModel} = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const PORT = process.env.PORT || 3002;
const url= process.env.MONGO_URL;


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/allHoldings' ,async (req, res)=>{
    let allHoldings= await HoldingsModel.find({});
    res.json(allHoldings);
} )

app.get('/allPositions' ,async (req, res)=>{
    let allPositions= await PositionsModel.find({});
    res.json(allPositions);
} )

app.post('/newOrder', async (req, res) => {
    const payload = req.body;
    console.log('payload', payload);

    try {
        let holdings = new HoldingsModel();
        holdings.name = payload.name;
        holdings.qty = payload.qty;
        holdings.price = payload.price;
        holdings.mode = payload.mode;
        await holdings.save();

        res.status(201).json({ message: 'Order created successfully', holdings });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Failed to create order', error });
    }
});

app.delete('/allHoldings', async (req, res) => {
    const id = req.query.id;
    console.log('ID to delete:', id);

    try {
        const deletedHolding = await HoldingsModel.findByIdAndDelete(id);

        if (!deletedHolding) {
            return res.status(404).json({ message: 'Holding not found' });
        }

        res.status(200).json({ message: 'Holding deleted successfully', deletedHolding });
    } catch (error) {
        console.error('Error deleting holding:', error);
        res.status(500).json({ message: 'Failed to delete holding', error });
    }
});



app.listen(PORT, ()=>{
    console.log("app started");
    mongoose.connect(url);
    console.log("DB connected");
});

