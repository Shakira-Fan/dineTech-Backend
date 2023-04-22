const express = require('express');
const loginRouter = require('./router/users'); // 引入會員登入相關的路由

const app = express();

// 使用 JSON 格式的請求主體解析器
app.use(express.json());

// 設定會員登入相關的路由
app.use('/api/login', loginRouter);

// 啟動伺服器
app.listen(3000, () => {
  console.log('伺服器已啟動在 http://localhost:3000');
});