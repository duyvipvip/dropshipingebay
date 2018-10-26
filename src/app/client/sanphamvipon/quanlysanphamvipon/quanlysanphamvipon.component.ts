import { Component, OnInit } from '@angular/core';
import { QuanLySanPhamViponService } from 'src/@http-service/quanlysanphamvipon.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SUCCESS } from 'src/@http-service/config/messages';
import { QuanLyTaiKhoanEbayService } from 'src/@http-service/quanlyttaikhhoanebay.service';

@Component({
    selector: 'app-quanlysanphamvipon',
    templateUrl: './quanlysanphamvipon.component.html',
    styleUrls: ['./quanlysanphamvipon.component.css']
})
export class QuanlysanphamviponComponent implements OnInit {
    public danhSachSanPhamVipon: any;
    public sanphamDelete: any;
    public arrTaiKhoanEbay: any;

    // export url
    public id_user_ebay_sell: string = "";
    public check: string = "";
    public prime: string = "";
    public search: string = "";
    constructor(private quanLySanPhamViponService: QuanLySanPhamViponService,
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
        const request = {
            id_user_ebay_sell: this.id_user_ebay_sell,
            check: this.check,
            prime: this.prime,
            search: this.search,
        }
        this.quanLySanPhamViponService.GetAll(request).subscribe((data) => {
            this.danhSachSanPhamVipon = data;
        }, (err) => {

        });
    }

    //
    public goToEdit(id: string) {
        this.router.navigate(['/client/chinhsuasanphamvipon', id]);
    }

    //
    public goToSee(id: string) {
        this.router.navigate(['/client/xemsanphamvipon', id]);

    }

    //
    chooseProductDelete(sanphamDelete){
        this.sanphamDelete = sanphamDelete;
    }

    // 
    public delete(){
        this.quanLySanPhamViponService.DeleteOne(this.sanphamDelete._id)
            .subscribe((data) => {
                this.toastr.success(SUCCESS.SANPHAMVIPON_DELETE, 'Success!');
            }, (err) => {
                this.toastr.success(err.error.message, 'Success!');
            });
    }

    // 
    public getTaiKhoanEbay(){
        this.quanLyTaiKhoanEbayService.GetAll()
            .subscribe((data) => {
                this.arrTaiKhoanEbay = data;
            }, (err) => {   

            });
    }

    //
    public onChange(event){
        this.getAllDanhSachTaiKhoanEbay();
    }
}
