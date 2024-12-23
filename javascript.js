// Lấy URL hiện tại
const url = new URL(window.location.href);

// Sử dụng URLSearchParams để lấy giá trị tham số
const params = new URLSearchParams(url.search);
const key = params.get('key');

console.log('Giá trị của key:', key);

// Hiển thị trên trang
document.body.innerHTML = `<p>Giá trị của key: ${key}</p>`;