const QuanLySanPhamVipon = require("../models/quanlysanphamvipon.model");

module.exports = {
    taosanpham: taosanpham,
    laydanhsachsanpham: laydanhsachsanpham,
    laymotsanpham: laymotsanpham,
    xoamotsanpham: xoamotsanpham,
    capnhatsanpham: capnhatsanpham
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

//
function laydanhsachsanpham(){
    return QuanLySanPhamVipon.find()
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

//
function laymotsanpham(id){
    return QuanLySanPhamVipon.findById(id)
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

//
function xoamotsanpham(id){
    return QuanLySanPhamVipon.findByIdAndDelete(id)
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((err) =>{
            return Promise.reject(err);
        })
}

//
function capnhatsanpham(id, body){
    return QuanLySanPhamVipon.findByIdAndUpdate(id, body)
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}