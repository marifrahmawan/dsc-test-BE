const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const productRoute = require('./routes/ProductRouter');

app.use('/api/product', productRoute);

app.listen(8080, async () => {
  try {
    console.log('http://localhost:8080');
    mongoose.connection.on('connected', () => console.log('connected to database'));

    await mongoose.connect(
      'mongodb+srv://*:*@cluster0.dpo4bu9.mongodb.net/ptxyz?retryWrites=true&w=majority'
    );
  } catch (error) {
    console.log(error);
  }
});
