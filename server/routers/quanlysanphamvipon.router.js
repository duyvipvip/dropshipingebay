const Router = require("express").Router();
const QuanLySanPhamViponController = require("../controllers/quanlysanphamvipon.controller");

Router.post("/taosanpham", taosanpham);
Router.get("/laydanhsachsanpham", laydanhsachsanpham);
Router.put("/capnhatmotsanpham/:id", capnhatmotsanpham);
Router.get("/laymotsanpham/:id", laymotsanpham);
Router.delete("/xoamotsanpham/:id", xoamotsanpham);
module.exports = Router;

//
function taosanpham(req, res, next) {
    if (!req.body.name) {
        next({
            statusCode: 400,
            message: "Tên Require"
        })
    } else if (!req.body.link_vipon) {
        next({
            statusCode: 400,
            message: "Link Vipon Require"
        })
    } else if (!req.body.link_amazon) {
        next({
            statusCode: 400,
            message: "Link Amazon Require"
        })
    } else if (!req.body.code) {
        next({
            statusCode: 400,
            message: "Mã Giảm Giá Require"
        })
    }else if (!req.body.count_day_remain) {
        next({
            statusCode: 400,
            message: "Số ngày khuyến mãi còn lại Require"
        })
    }else{
        QuanLySanPhamViponController.taosanpham(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return next(err);
        })
    }
}

// 
function laydanhsachsanpham(req, res, next) {
    QuanLySanPhamViponController.laydanhsachsanpham()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return next(err);
        })
}

//
function capnhatmotsanpham(req, res, next) {
    QuanLySanPhamViponController.capnhatsanpham(req.params.id, req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return next(err);
        })
}

// 
function laymotsanpham(req, res, next) {
    QuanLySanPhamViponController.laymotsanpham(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return next(err);
        })
}

//
function xoamotsanpham(req, res, next) {
    QuanLySanPhamViponController.xoamotsanpham(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return next(err);
        })
}
