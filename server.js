var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fileUpload = require('express-fileupload');
const path = require('path');

var errorHandler = require(path.join(__dirname, "/server/middle-ware/error-handler"));
var RoomRouter = require(path.join(__dirname, "/server/routers/room.router"));
var UserRouter = require(path.join(__dirname, "/server/routers/user.router"));
var AuthRouter = require(path.join(__dirname, "/server/routers/auth.router"));
var HistoryRouter = require(path.join(__dirname, "/server/routers/history.router"));
var ContactRouter = require(path.join(__dirname, "/server/routers/contact.router"));
var QuanLySanPhamViponRouter = require(path.join(__dirname, "/server/routers/quanlysanphamvipon.router"));
var QuanLySanPhamAmazonEbayRouter = require(path.join(__dirname, "/server/routers/sanpham_amazon_ebay.router.js"));
const QuanLyTaiKhoanRouter = require(path.join(__dirname, "/server/routers/quanlytaikhoan.router"));


var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
    next();
};
app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, "/server/public"))); // de public cho client co the su dung duoc file trong thu muc do
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//PORT ĐỂ TRUY CẬP APPLICATION
const port = process.env.PORT || 8088;
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.static(__dirname + '/dist/my-app'));

app.use('/api/Room', RoomRouter);
app.use('/api/User', UserRouter);
app.use('/api/Auth', AuthRouter);
app.use('/api/History', HistoryRouter);
app.use('/api/Contact', ContactRouter);
app.use('/api/QuanLySanPhamVipon', QuanLySanPhamViponRouter);
app.use('/api/QuanLyTaiKhoan', QuanLyTaiKhoanRouter);
app.use('/api/QuanLySanPhamAmazonEbay', QuanLySanPhamAmazonEbayRouter);
// mongoose.connect('mongodb://localhost:27017/Broading_House',(err)=>{
mongoose.connect('mongodb://havanduy:havanduy709@ds139243.mlab.com:39243/dropshippingebay', (err) => {
    if (err) {
        console.log('not connect to the database');
    } else {
        console.log('Successfully connected to MongoDB')
    }
})
app.use(errorHandler.errorHandler());
app.listen(port, (err) => {
    console.log('server run port 8088 http://localhost:', port);
})