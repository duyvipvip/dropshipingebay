import { Component, OnInit } from '@angular/core';
import { QuanLyTaiKhoanEbayService } from 'src/@http-service/quanlyttaikhhoanebay.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quanlytaikhoanebay',
    templateUrl: './quanlytaikhoanebay.component.html',
    styleUrls: ['./quanlytaikhoanebay.component.scss']
})
export class QuanlytaikhoanebayComponent implements OnInit {
    public danhSachTaiKhoanEbay: any;
    constructor(private quanLyTaiKhoanEbayService: QuanLyTaiKhoanEbayService, private router: Router) {

    }

    ngOnInit() {
        //
        this.getAllDanhSachTaiKhoanEbay();
    }

    // 
    public getAllDanhSachTaiKhoanEbay(){
        this.quanLyTaiKhoanEbayService.GetAll().subscribe((data) => {
            this.danhSachTaiKhoanEbay = data;
        }, (err) => {

        });
    }

    //
    public goToEdit(id: string){
        this.router.navigate(['/client/chinhsuataikhoanebay', id]);
    }

    //
    public goToSee(id: string){
        this.router.navigate(['/client/xemtaikhoanebay', id]);
        
    }

}
