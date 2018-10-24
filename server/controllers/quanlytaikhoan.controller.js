const QuanLyTaiKhoanModel = require('../models/quanlytaikhoan.model');
module.exports = {
    taotaikhoan: taotaikhoan
}

// THEM TAI KHOAN EBAY
function taotaikhoan(body){
    return QuanLyTaiKhoanModel.create(body)
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}