export const APICONFIG = {
    BASEPOINT: 'http://localhost:8088',
    USER:{
        CREATE_USER:'/api/User/CreateUser',
        UPDATE_USER:'/api/User/UpdateUser',
        GET_ALL_USER:'/api/User/GetUser',
        UPLOAD_AVATAR:'/api/User/UploadAvatar',
        GET_INFOR_USER:'/api/User/GetInforUser',
        CHANGE_PASSWORD:'/api/User/ChangePassword',
        FORGET_PASSWORD:'/api/User/FogetPassword',
        UPDATE_USER_BY_ADMIN:'/api/User/UpdateUserByAdmin',
        DELETE_USER:'/api/User/DeleteUser/'

    },
    QUANLYTAIKHOANEBAY:{
        GETALL_TAIKHOANEBAY: '/api/QuanLyTaiKhoan/laydanhsach',
        GETONE_TAIKHOANEBAY: (id) => `/api/QuanLyTaiKhoan/laymottaikhoan/${id}`,
        UPDATEONE_TAIKHOANEBAY: (id) => `/api/QuanLyTaiKhoan/chinhsuamottaikhoan/${id}`,
        CREATEONE_TAIKHOANEBAY: '/api/QuanLyTaiKhoan/taotaikhoan',
    },
    QUANLYSANPHAMVIPON:{
        GETALL_SANPHAMVIPON: '/api/QuanLySanPhamVipon/laydanhsachsanpham',
        GETONE_SANPHAMVIPON: (id) => `/api/QuanLySanPhamVipon/laymotsanpham/${id}`,
        UPDATEONE_SANPHAMVIPON: (id) => `/api/QuanLySanPhamVipon/capnhatmotsanpham/${id}`,
        CREATEONE_SANPHAMVIPON: '/api/QuanLySanPhamVipon/taosanpham',
        DELETEONE_SANPHAMVIPON: (id) => `/api/QuanLySanPhamVipon/xoamotsanpham/${id}`
    },
    QUANLYSANPHAMAMZONEBAY:{
        GETALL_SANPHAMAMZONEBAY: '/api/QuanLySanPhamAmazonEbay/laydanhsachsanpham',
        GETONE_SANPHAMAMZONEBAY: (id) => `/api/QuanLySanPhamAmazonEbay/laymotsanpham/${id}`,
        UPDATEONE_SANPHAMAMZONEBAY: (id) => `/api/QuanLySanPhamAmazonEbay/capnhatmotsanpham/${id}`,
        CREATEONE_SANPHAMAMZONEBAY: '/api/QuanLySanPhamAmazonEbay/taosanpham',
        DELETEONE_SANPHAMAMZONEBAY: (id) => `/api/QuanLySanPhamAmazonEbay/xoamotsanpham/${id}`
    },
    AUTH: {
      LOGIN: '/api/auth/login',
      LOGOUT: '/api/auth/logout'
    },
    ROOM: {
        CREATE_ROOM:'/api/Room/CreateRoom',
        GET_ROOMS:'/api/Room/GetRoom',
        UPDATE_ROOM:'/api/Room/UpdateRoom/',
        DELETE_ROOM:'/api/Room/DeleteRoom/',
        GET_ROOM_BY_USER:'/api/Room/GetRoomByUser/',
        GET_ROOM_BY_ID:'/api/Room/getRoomById',
        TRANSACTION:'/api/Room/Transaction/' 
    },
    HISTORY:{
        GET_HISTORY:'/api/History/GetHistory',
        GET_HISTORY_ADMIN:'/api/History/GetHistoryAdmin'
    },
    CONTACT: {
        CREATE_CONTACT:'/api/Contact/CreateContact',
        GET_CONTACT:'/api/Contact/GetContact',
    }

}