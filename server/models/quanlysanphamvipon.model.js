const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuanLySanPhamViponSchema = new Schema({
    name: {
        type: String
    },
    count_day_remain: {
        type: String
    },
    date_create: {
        type: String
    },
    zipcode: {
        type: String
    },
    link_vipon: {
        type: String
    },
    link_amazon: {
        type: String
    },
    id_user_amazon_buy: {
        type: String
    },
    id_user_ebay_sell: {
        type: String
    },
    price_amazon: {
        type: String
    },
    price_vipon: {
        type: String
    },
    add_accout_amazon: {
        type: boolean
    },
})

const QuanLySanPhamVipon = mongoose.model('QuanLySanPhamVipon', QuanLySanPhamViponSchema);
module.exports = QuanLySanPhamVipon;
