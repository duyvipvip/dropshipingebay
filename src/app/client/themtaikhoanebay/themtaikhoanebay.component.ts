import { Component, OnInit } from '@angular/core';
import { QuanLyTaiKhoanEbayService } from 'src/@http-service/quanlyttaikhhoanebay.service';
import { SUCCESS } from 'src/@http-service/config/messages';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'app-themtaikhoanebay',
    templateUrl: './themtaikhoanebay.component.html',
    styleUrls: ['./themtaikhoanebay.component.css']
})
export class ThemtaikhoanebayComponent implements OnInit {
    public taikhoanebay: any = {};
    constructor(private quanLyTaiKhoanEbayService: QuanLyTaiKhoanEbayService,
        private toastr: ToastrService,
        private router: Router) { }

    ngOnInit() {
    }

    //
    public taomoitaikhoanebay(){
        this.quanLyTaiKhoanEbayService.Createone(this.taikhoanebay).subscribe((data) => {
            this.toastr.success(SUCCESS.QUANLYTAIKHOANEBAY_CREATE, 'Success!');
            this.router.navigate(['client/xemdanhsachtaikhoanebay']);
        }, (err) => {
            this.toastr.error(err.error.message, 'Error!');
        });
    }

}
