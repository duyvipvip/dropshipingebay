const QuanLySanPhamAmazonEbay = require("../models/sanpham_amazon_ebay.model");

module.exports = {
    taosanpham: taosanpham,
    laydanhsachsanpham: laydanhsachsanpham,
    laymotsanpham: laymotsanpham,
    xoamotsanpham: xoamotsanpham,
    capnhatsanpham: capnhatsanpham
}

//
function taosanpham(body){
    return QuanLySanPhamAmazonEbay.create(body)
            .then((data) => {
                return Promise.resolve(data);
            })
            .catch((err) => {
                return Promise.reject(err);
            })
}

//
function laydanhsachsanpham(request){
    return QuanLySanPhamAmazonEbay.find({check_product: request.check, name_product : { $regex: request.search, $options: 'i' }}).lean()
        .populate('id_user_ebay_sell')
        .then((data) => {
            // for(let i=0; i< data.length; i++){
            //     data[i].calculate_date = distance_two_day(data[i].date_start, data[i].count_day_remain);
            // }
            if(request.id_user_ebay_sell != null){
                return Promise.resolve(data.filter(p => p.id_user_ebay_sell._id == request.id_user_ebay_sell));
            }
            return Promise.resolve(data);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

//
function laymotsanpham(id){
    return QuanLySanPhamAmazonEbay.findById(id)
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
    return QuanLySanPhamAmazonEbay.findByIdAndDelete(id)
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((err) =>{
            return Promise.reject(err);
        })
}

//
function capnhatsanpham(id, body){
    return QuanLySanPhamAmazonEbay.findByIdAndUpdate(id, body)
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}
