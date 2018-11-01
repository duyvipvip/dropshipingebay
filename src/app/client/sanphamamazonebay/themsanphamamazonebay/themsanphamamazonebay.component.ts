import { Component, OnInit } from '@angular/core';
import { QuanLySanPhamAmazonEbayService } from 'src/@http-service/quanlysanphamamazonebay.service';
import { QuanLyTaiKhoanEbayService } from 'src/@http-service/quanlyttaikhhoanebay.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SUCCESS } from 'src/@http-service/config/messages';

@Component({
    selector: 'app-themsanphamamazonebay',
    templateUrl: './themsanphamamazonebay.component.html',
    styleUrls: ['./themsanphamamazonebay.component.css']
})
export class ThemsanphamamazonebayComponent implements OnInit {

    public arrTaiKhoanEbay: any;
    public sanphamamazonebay: any = {};
    constructor(private quanLySanPhamAmazonEbayService: QuanLySanPhamAmazonEbayService,
        private quanLyTaiKhoanEbayService: QuanLyTaiKhoanEbayService,
        private toastr: ToastrService,
        private router: Router) {
            this.sanphamamazonebay.check_product = false;
            //
            this.getTaiKhoanEbay();
    }

    ngOnInit() {
    }

    //
    public taomoisanphamvipon() {
        this.quanLySanPhamAmazonEbayService.Createone(this.sanphamamazonebay).subscribe((data) => {
            this.toastr.success(SUCCESS.QUANLYTAIKHOANEBAY_CREATE, 'Success!');
            this.router.navigate(['client/xemdanhsachsanphamamazonebay']);
        }, (err) => {
            this.toastr.error(err.error.message, 'Error!');
        });
    }

    //
    public changecheck(check) {
        this.sanphamamazonebay.check_product = check;
    }

    // 
    // 
    public getTaiKhoanEbay() {
        this.quanLyTaiKhoanEbayService.GetAll()
            .subscribe((data) => {
                this.arrTaiKhoanEbay = data;
            }, (err) => {

            });
    }

}
