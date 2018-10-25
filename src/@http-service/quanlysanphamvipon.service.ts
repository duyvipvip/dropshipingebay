import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APICONFIG } from './config/api-config';

@Injectable()
export class QuanLySanPhamViponService {

    constructor(private http: HttpClient) {

    }

    // 
    public GetAll(){
        const token :string = JSON.parse(localStorage.getItem('data')).token;
        let headers = new HttpHeaders().set('x-access-token', token);
        return this.http.get(`${APICONFIG.BASEPOINT}${APICONFIG.QUANLYSANPHAMVIPON.GETALL_TAIKHOANEBAY}`,{ headers: headers });
    }

    //
    public GetOne(id: string){
        const token :string = JSON.parse(localStorage.getItem('data')).token;
        let headers = new HttpHeaders().set('x-access-token', token);
        return this.http.get(`${APICONFIG.BASEPOINT}${APICONFIG.QUANLYSANPHAMVIPON.GETONE_TAIKHOANEBAY(id)}`,{ headers: headers });
    }

    //
    public UpdateOne(id,bodyTaiKhoanEbay){
        const token :string = JSON.parse(localStorage.getItem('data')).token;
        let headers = new HttpHeaders().set('x-access-token', token);
        return this.http.put(`${APICONFIG.BASEPOINT}${APICONFIG.QUANLYSANPHAMVIPON.UPDATEONE_TAIKHOANEBAY(id)}`, bodyTaiKhoanEbay,{ headers: headers });
    }

    //
    public Createone(bodyTaiKhoanEbay){
        const token :string = JSON.parse(localStorage.getItem('data')).token;
        let headers = new HttpHeaders().set('x-access-token', token);
        return this.http.post(`${APICONFIG.BASEPOINT}${APICONFIG.QUANLYSANPHAMVIPON.CREATEONE_TAIKHOANEBAY}`, bodyTaiKhoanEbay,{ headers: headers });
    }
}