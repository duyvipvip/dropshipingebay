import { Component, OnInit } from '@angular/core';
import { SUCCESS } from 'src/@http-service/config/messages';
import { QuanLySanPhamAmazonEbayService } from 'src/@http-service/quanlysanphamamazonebay.service';
import { ToastrService } from 'ngx-toastr';
import { QuanLyTaiKhoanEbayService } from 'src/@http-service/quanlyttaikhhoanebay.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quanlysanphamamazonebay',
    templateUrl: './quanlysanphamamazonebay.component.html',
    styleUrls: ['./quanlysanphamamazonebay.component.scss']
})
export class QuanlysanphamamazonebayComponent implements OnInit {

    public danhSachSanPhamAmazonEbay: any = null;
    public sanphamDelete: any;
    public arrTaiKhoanEbay: any;
    public totalItems: number = 1;
    public amount: number = 1;
    public currentPage: number;

    // export url
    public id_user_ebay_sell: string = "";
    public check: boolean = true;
    public search: string = '';
    constructor(private quanLySanPhamAmazonEbayService: QuanLySanPhamAmazonEbayService,
        private toastr: ToastrService,
        private quanLyTaiKhoanEbayService: QuanLyTaiKhoanEbayService,
        private router: Router) { }

    ngOnInit() {
        //
        this.getAllDanhSachTaiKhoanEbay();
        // 
        this.getTaiKhoanEbay();
    }

    // 
    public getAllDanhSachTaiKhoanEbay() {
        this.danhSachSanPhamAmazonEbay = null;
        const request = {
            id_user_ebay_sell: this.id_user_ebay_sell,
            check: this.check,
            search: this.search,
        }

        this.quanLySanPhamAmazonEbayService.GetAll(request).subscribe((data) => {
            this.danhSachSanPhamAmazonEbay = data;
        }, (err) => {

        });
    }

    //
    public goToEdit(id: string) {
        this.router.navigate(['/client/chinhsuasanphamamazonebay', id]);
    }

    //
    public goToSee(id: string) {
        this.router.navigate(['/client/xemsanphamamazonebay', id]);

    }

    //
    chooseProductDelete(sanphamDelete) {
        this.sanphamDelete = sanphamDelete;
    }

    // 
    public delete() {
        this.quanLySanPhamAmazonEbayService.DeleteOne(this.sanphamDelete._id)
            .subscribe((data) => {
                this.toastr.success(SUCCESS.SANPHAMVIPON_DELETE, 'Success!');
            }, (err) => {
                this.toastr.success(err.error.message, 'Success!');
            });
    }

    // 
    public getTaiKhoanEbay() {
        this.quanLyTaiKhoanEbayService.GetAll()
            .subscribe((data) => {
                this.arrTaiKhoanEbay = data;
            }, (err) => {

            });
    }

    //
    public onChange(event) {
        this.getAllDanhSachTaiKhoanEbay();
    }

    //
    public onKyPress(value) {
        this.search = value;
        this.getAllDanhSachTaiKhoanEbay();
    }

    //
    public pageChange(event) {
        this.currentPage = event;
        this.getAllDanhSachTaiKhoanEbay();
    }

}
