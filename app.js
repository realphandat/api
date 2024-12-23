const express = require('express');
const app = express();

// Định nghĩa route cho GET /
app.get('/', (req, res) => {
    // Lấy giá trị của tham số key
    const key = req.query.key;

    // Trả về giá trị tham số key hoặc thông báo lỗi nếu không có
    if (key) {
        res.send(key); // Trả về giá trị key dưới dạng text
    } else {
        res.status(400).send("Không tìm thấy tham số 'key'.");
    }
});

// Cổng server lắng nghe
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
