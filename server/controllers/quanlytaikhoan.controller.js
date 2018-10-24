const QuanLyTaiKhoanModel = require('../models/quanlytaikhoan.model');
module.exports = {
    taotaikhoan: taotaikhoan,
    laydanhsach: laydanhsach,
    laymottaikhoan: laymottaikhoan,
    chinhsuamottaikhoan: chinhsuamottaikhoan,
    xoamottaikhoan: xoamottaikhoan
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

//
function laydanhsach(){
    return QuanLyTaiKhoanModel.find()
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

//
function laymottaikhoan(id){
    return QuanLyTaiKhoanModel.findById(id)
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

//
function chinhsuamottaikhoan(id, body){
    return QuanLyTaiKhoanModel.findByIdAndUpdate(id, body)
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

//
function xoamottaikhoan(id){
    return QuanLyTaiKhoanModel.findByIdAndDelete(id)
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}