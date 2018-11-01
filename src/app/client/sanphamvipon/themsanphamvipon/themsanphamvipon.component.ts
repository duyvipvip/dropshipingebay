import { Component, OnInit } from '@angular/core';
import { SUCCESS } from 'src/@http-service/config/messages';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { QuanLySanPhamViponService } from 'src/@http-service/quanlysanphamvipon.service';
import { QuanLyTaiKhoanEbayService } from 'src/@http-service/quanlyttaikhhoanebay.service';

@Component({
    selector: 'app-themsanphamvipon',
    templateUrl: './themsanphamvipon.component.html',
    styleUrls: ['./themsanphamvipon.component.css']
})
export class ThemsanphamviponComponent implements OnInit {
    public arrTaiKhoanEbay: any;
    public sanphamvipon: any = {};
    constructor(private quanLySanPhamViponService: QuanLySanPhamViponService,
        private quanLyTaiKhoanEbayService: QuanLyTaiKhoanEbayService,
        private toastr: ToastrService,
        private router: Router) {
            this.sanphamvipon.prime = false;
        }

    ngOnInit() {
    }

    //
    public taomoisanphamvipon() {
        this.quanLySanPhamViponService.Createone(this.sanphamvipon).subscribe((data) => {
            this.toastr.success(SUCCESS.QUANLYTAIKHOANEBAY_CREATE, 'Success!');
            this.router.navigate(['client/xemdanhsachsanphamvipon']);
        }, (err) => {
            this.toastr.error(err.error.message, 'Error!');
        });
    }

    //
    public changeprime(prime){
        this.sanphamvipon.prime = prime;
    }

    //
    public changecheck(check){
        this.sanphamvipon.check = check;
    }

    // 
    // 
    public getTaiKhoanEbay(){
        this.quanLyTaiKhoanEbayService.GetAll()
            .subscribe((data) => {
                this.arrTaiKhoanEbay = data;
            }, (err) => {   

            });
    }
}
