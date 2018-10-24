const Router = require("express").Router();
const QuanLySanPhamViponController = require("../controllers/quanlysanphamvipon.controller");

Router.post("/taosanpham", taosanpham);
module.exports = Router;

//
function taosanpham(req, res, next){
    QuanLySanPhamViponController.taosanpham(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return next(err);
        })
}