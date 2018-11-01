import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APICONFIG } from './config/api-config';
import { requestQuery } from 'src/@shared/utils/requestQuery';

@Injectable()
export class QuanLySanPhamAmazonEbayService {

    constructor(private http: HttpClient) {

    }

    // 
    public GetAll(request){
        const token :string = JSON.parse(localStorage.getItem('data')).token;
        let headers = new HttpHeaders().set('x-access-token', token);
        return this.http.get(`${APICONFIG.BASEPOINT}${APICONFIG.QUANLYSANPHAMAMZONEBAY.GETALL_SANPHAMAMZONEBAY}?${requestQuery(request)}`,{ headers: headers });
    }

    //
    public GetOne(id: string){
        const token :string = JSON.parse(localStorage.getItem('data')).token;
        let headers = new HttpHeaders().set('x-access-token', token);
        return this.http.get(`${APICONFIG.BASEPOINT}${APICONFIG.QUANLYSANPHAMAMZONEBAY.GETONE_SANPHAMAMZONEBAY(id)}`,{ headers: headers });
    }

    //
    public UpdateOne(id,bodyTaiKhoanEbay){
        const token :string = JSON.parse(localStorage.getItem('data')).token;
        let headers = new HttpHeaders().set('x-access-token', token);
        return this.http.put(`${APICONFIG.BASEPOINT}${APICONFIG.QUANLYSANPHAMAMZONEBAY.UPDATEONE_SANPHAMAMZONEBAY(id)}`, bodyTaiKhoanEbay,{ headers: headers });
    }

    //
    public Createone(bodyTaiKhoanEbay){
        const token :string = JSON.parse(localStorage.getItem('data')).token;
        let headers = new HttpHeaders().set('x-access-token', token);
        return this.http.post(`${APICONFIG.BASEPOINT}${APICONFIG.QUANLYSANPHAMAMZONEBAY.CREATEONE_SANPHAMAMZONEBAY}`, bodyTaiKhoanEbay,{ headers: headers });
    }

    //
    public DeleteOne(id: String){
        const token :string = JSON.parse(localStorage.getItem('data')).token;
        let headers = new HttpHeaders().set('x-access-token', token);
        return this.http.delete(`${APICONFIG.BASEPOINT}${APICONFIG.QUANLYSANPHAMAMZONEBAY.DELETEONE_SANPHAMAMZONEBAY(id)}`,{ headers: headers });
    }
}