const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuanLyTaiKhoanSchema = new Schema({
    name_register: {
        type: String
    },
    address: {
        type: String
    },
    state: {
        type: String
    },
    zipcode: {
        type: String
    },
    visa: {
        type: String
    },
    date: {
        type: String
    },
    cvv: {
        type: String
    },
    sdt: {
        type: String
    },
    birthday: {
        type: String
    },
    cmt_gplx: {
        type: String
    },
    email: {
        type: String
    },
    pass_email:{
        type: String
    },
    ebay: {
        type: String
    },
    pass_ebay: {
        type: String
    },
    user_id: {
        type: String
    },
    date_register:{
        type: String
    },
    count_limit: {
        type: String
    },
    paypal: {
        type: String
    },
    pass_paypal: {
        type: String
    },
    name_vitual: {
        type: String
    }
})

const QuanLyTaiKhoan = mongoose.model('QuanLyTaiKhoan', QuanLyTaiKhoanSchema);
module.exports = QuanLyTaiKhoan;
