const QuanLySanPhamVipon = require("../models/quanlysanphamvipon.model");

module.exports = {
    taosanpham: taosanpham
}

//
function taosanpham(body){
    return QuanLySanPhamVipon.create(body)
            .then((data) => {
                return Promise.resolve(data);
            })
            .catch((err) => {
                return Promise.reject(err);
            })
}