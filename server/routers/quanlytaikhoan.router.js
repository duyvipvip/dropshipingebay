const Router = require("express").Router();
const QuanLyTaiKhoanConTroller = require("../controllers/quanlytaikhoan.controller");

// CAC ROUTER
Router.post("/taotaikhoan", taoTaiKhoan);
Router.get("/laydanhsach", laydanhsach);
Router.get("/laymottaikhoan/:id", laymottaikhoan);
Router.put("/chinhsuamottaikhoan/:id", chinhsuamottaikhoan);
module.exports = Router;

// 
function taoTaiKhoan(req, res, next){
    if (!req.body.name_register) {
        next({
            statusCode: 400,
            message: "Tên Đăng Kí Require"
        })
    } else if (!req.body.address) {
        next({
            statusCode: 400,
            message: "Địa Chỉ Require"
        })
    }else if (!req.body.state) {
        next({
            statusCode: 400,
            message: "State Require"
        })
    }else if (!req.body.zipcode) {
        next({
            statusCode: 400,
            message: "Zip Code Require"
        })
    }else if (!req.body.visa) {
        next({
            statusCode: 400,
            message: "Visa Require"
        })
    }else if (!req.body.date) {
        next({
            statusCode: 400,
            message: "Date Require"
        })
    }else if (!req.body.cvv) {
        next({
            statusCode: 400,
            message: "Cvv Require"
        })
    }else if (!req.body.sdt) {
        next({
            statusCode: 400,
            message: "Sdt Require"
        })
    }else if (!req.body.birthday) {
        next({
            statusCode: 400,
            message: "Birthday Require"
        })
    }else if (!req.body.cmt_gplx) {
        next({
            statusCode: 400,
            message: "Số CMND,GPLX Require"
        })
    }else if (!req.body.email) {
        next({
            statusCode: 400,
            message: "Email Require"
        })
    }else if (!req.body.pass_email) {
        next({
            statusCode: 400,
            message: "Pass Email Require"
        })
    }else if (!req.body.ebay) {
        next({
            statusCode: 400,
            message: "Name Account Ebay Require"
        })
    }else if (!req.body.user_id) {
        next({
            statusCode: 400,
            message: "User Id Require"
        })
    }else if (!req.body.date_register) {
        next({
            statusCode: 400,
            message: "Date Register Require"
        })
    }else if (!req.body.count_limit) {
        next({
            statusCode: 400,
            message: "Tên Count Limit Require"
        })
    }else if (!req.body.paypal) {
        next({
            statusCode: 400,
            message: "PayPal Require"
        })
    }else if (!req.body.pass_paypal) {
        next({
            statusCode: 400,
            message: "Pass PayPal Require"
        })
    }else if (!req.body.name_vitual) {
        next({
            statusCode: 400,
            message: "Name Vitual Require"
        })
    }else{
        QuanLyTaiKhoanConTroller.taotaikhoan(req.body)
        .then((data) => {
            res.send({message: "Success"})
        })
        .catch((err) => {
            return next(err);
        })
    }
}

// 
function laydanhsach(req , res, next){
    QuanLyTaiKhoanConTroller.laydanhsach()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return next(err);
        })
}

//
function laymottaikhoan(req, res, next){
    if(!req.params.id){
        next({
            statusCode: 400,
            message: "Id Tai Khoan Require"
        })
    }else{
        QuanLyTaiKhoanConTroller.laymottaikhoan(req.params.id)
        .then((data) =>{
            res.send(data);
        })
        .catch((err) => {
            return next(err);
        })
    }
}

//
function chinhsuamottaikhoan(req, res, next){
    if(!req.params.id){
        next({
            statusCode: 400,
            message: "Id Tai Khoan Require"
        })
    }else{
        QuanLyTaiKhoanConTroller.chinhsuamottaikhoan(req.params.id, req.body)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                return next(err);
            })
    }
}
