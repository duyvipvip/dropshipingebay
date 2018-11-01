const Router = require("express").Router();
const QuanLySanPhamAmazonEbayController = require("../controllers/sanpham_amazon_ebay.controller");

Router.post("/taosanpham", taosanpham);
Router.get("/laydanhsachsanpham", laydanhsachsanpham);
Router.put("/capnhatmotsanpham/:id", capnhatmotsanpham);
Router.get("/laymotsanpham/:id", laymotsanpham);
Router.delete("/xoamotsanpham/:id", xoamotsanpham);
module.exports = Router;

//
function taosanpham(req, res, next) {
    if (!req.body.name_product) {
        next({
            statusCode: 400,
            message: "Tên Sản Phẩm Require"
        })
    } else if (!req.body.link_amazon) {
        next({
            statusCode: 400,
            message: "Link Amazon Require"
        })
    } else if (!req.body.link_ebay) {
        next({
            statusCode: 400,
            message: "Link Ebay Require"
        })
    } else if (!req.body.price_amazon) {
        next({
            statusCode: 400,
            message: "Price Amazon Require"
        })
    } else if (!req.body.price_ebay) {
        next({
            statusCode: 400,
            message: "Price Ebay Require"
        })
    } else if (!req.body.link_image) {
        next({
            statusCode: 400,
            message: "Link Image Require"
        })
    }
    else {
        QuanLySanPhamAmazonEbayController.taosanpham(req.body)
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
    const request = {
        'id_user_ebay_sell': req.query.id_user_ebay_sell || null,
        'check': req.query.check,
        'search': req.query.search || ""
    }
    console.log(request);
    QuanLySanPhamAmazonEbayController.laydanhsachsanpham(request)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return next(err);
        })
}

//
function capnhatmotsanpham(req, res, next) {
    QuanLySanPhamAmazonEbayController.capnhatsanpham(req.params.id, req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return next(err);
        })
}

// 
function laymotsanpham(req, res, next) {
    QuanLySanPhamAmazonEbayController.laymotsanpham(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return next(err);
        })
}

//
function xoamotsanpham(req, res, next) {
    QuanLySanPhamAmazonEbayController.xoamotsanpham(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return next(err);
        })
}
