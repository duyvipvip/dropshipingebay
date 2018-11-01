const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SanPhamAmazonEbaySchema = new Schema({
    name_product: {
        type: String
    },
    link_amazon: {
        type: String
    },
    link_ebay: {
        type: String
    },
    price_amazon: {
        type: String
    },
    price_ebay: {
        type: String
    },
    link_image: {
        type: String
    },
    check_product: {
        type: Boolean,
        default: false
    },
    id_user_ebay_sell: {
        type: Schema.Types.ObjectId,
        ref: 'QuanLyTaiKhoan'
    },
    note:{ 
        type: String
    }
})

const SanPhamAmazonEbay = mongoose.model('SanPhamAmazonEbay', SanPhamAmazonEbaySchema);
module.exports = SanPhamAmazonEbay;
