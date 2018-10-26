const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuanLySanPhamViponSchema = new Schema({
    // ten
    name: {
        type: String
    },
    // so ngay con lai
    count_day_remain: {
        type: String
    },
    // link vipon
    link_vipon: {
        type: String
    },
    // link amazon
    link_amazon: {
        type: String
    },
    // tai khoan amazon mua
    id_user_amazon_buy: {
        type: String
    },
    // tai khoan ebay ban
    id_user_ebay_sell: {
        type: Schema.Types.ObjectId,
        ref: 'QuanLyTaiKhoan' 
    },
    // giá ebay
    price_amazon: {
        type: String
    },
    // giá vipon
    price_vipon: {
        type: String
    },
    // mã giảm giá
    code: {
        type: String
    },
    // ngay bat đầu
    date_start: {
        type: String
    },
    // giao hang 2 ngay
    prime: {
        type: Boolean
    },
    // gia giao hang nhanh
    price_prime:{
        type: String
    },
    // số lượng mua tối đa
    count_product_buy: {
        type: String
    },
    // đã kiễm tra
    check:{
        type: Boolean,
        default: false
    },
    // link hình ảnh
    link_image: {
        type: String
    },
    // ngi chu
    note: {
        type: String
    }
})

const QuanLySanPhamVipon = mongoose.model('QuanLySanPhamVipon', QuanLySanPhamViponSchema);
module.exports = QuanLySanPhamVipon;
