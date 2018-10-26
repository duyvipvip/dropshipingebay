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
function laydanhsachsanpham(request){
    return QuanLySanPhamVipon.find({prime: ''}, {check: ''}).lean()
        .populate()
        .then((data) => {
            for(let i=0; i< data.length; i++){
                data[i].calculate_date = distance_two_day(data[i].date_start, data[i].count_day_remain);
            }
            return Promise.resolve(data);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

//
function laymotsanpham(id){
    return QuanLySanPhamVipon.findById(id)
        .populate('id_user_ebay_sell')
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

//
function distance_two_day(date, day){
    date = date.split("/");
    let now_date = new Date();
    let current_date = [];
    current_date[0] = now_date.getDate();
    current_date[1] = now_date.getMonth()+1;
    current_date[2] = now_date.getFullYear();


    var diff = Math.abs(new Date(current_date[2], current_date[1], current_date[0], 0, 0, 0,0).getTime() - new Date(date[2], date[1], date[0], 0, 0, 0,0).getTime());
    return day - Math.ceil(diff / (1000 * 3600 * 24)); ;
}