import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { QuanLySanPhamAmazonEbayService } from 'src/@http-service/quanlysanphamamazonebay.service';
import { QuanLyTaiKhoanEbayService } from 'src/@http-service/quanlyttaikhhoanebay.service';
import { ToastrService } from 'ngx-toastr';
import { SUCCESS } from 'src/@http-service/config/messages';

@Component({
    selector: 'app-chinhsuasanphamamazonebay',
    templateUrl: './chinhsuasanphamamazonebay.component.html',
    styleUrls: ['./chinhsuasanphamamazonebay.component.css']
})
export class ChinhsuasanphamamazonebayComponent implements OnInit {

    public sanphamamazonebay: any;
    public arrTaiKhoanEbay: any;
    constructor(private route: ActivatedRoute,
        private quanLySanPhamAmazonEbayService: QuanLySanPhamAmazonEbayService,
        private quanLyTaiKhoanEbayService: QuanLyTaiKhoanEbayService,
        private toastr: ToastrService,
        private router: Router) {
        this.route.params.subscribe((params: Params) => {
            const id = params['id'];
            //
            this.laytaikhoan(id);
        })
    }

    ngOnInit() {
        //
        this.getTaiKhoanEbay();
    }

    // 
    public laytaikhoan(id: string) {
        this.quanLySanPhamAmazonEbayService.GetOne(id).subscribe((data) => {
            this.sanphamamazonebay = data;
        }, (err) => {

        });
    }

    public chinhsuasanphamvipon() {
        this.quanLySanPhamAmazonEbayService.UpdateOne(this.sanphamamazonebay._id, this.sanphamamazonebay).subscribe((data) => {
            this.toastr.success(SUCCESS.QUANLYTAIKHOANEBAY_UPDATE, 'Success!');
            this.router.navigate(['client/xemdanhsachsanphamamazonebay']);
        }, (err) => {

        });
    }

    //
    public changecheck(check) {
        this.sanphamamazonebay.check_product = check;
    }

    // 
    public getTaiKhoanEbay() {
        this.quanLyTaiKhoanEbayService.GetAll()
            .subscribe((data) => {
                this.arrTaiKhoanEbay = data;
            }, (err) => {

            });
    }

}
