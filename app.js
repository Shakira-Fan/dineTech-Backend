const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

// 資料庫設定開始
const mongoose = require('mongoose');
(async () => {
  try {
    await mongoose.connect(`${process.env.DB_HOST}${process.env.DB_NAME}`);
  } catch (err) {
  }
})();

// 前台API Router Import
// const custRouter = require('./front/routes/cust');
const empRouter = require('./front/routes/emp');

// 後台
const loginRouter = require('./back/routes/login');
const productRouter = require('./back/routes/product');

const app = express();

//cors
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//前台

//前台
// app.use('/emp', empRouter);
// app.use('/cust', custRouter);

// 後台
app.use('/admin/login', loginRouter);
app.use('/admin/product', productRouter);

module.exports = app;
