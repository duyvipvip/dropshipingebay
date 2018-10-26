import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SUCCESS } from 'src/@http-service/config/messages';
import { QuanLySanPhamViponService } from 'src/@http-service/quanlysanphamvipon.service';
import { QuanLyTaiKhoanEbayService } from 'src/@http-service/quanlyttaikhhoanebay.service';

@Component({
    selector: 'app-chinhsuasanphamvipon',
    templateUrl: './chinhsuasanphamvipon.component.html',
    styleUrls: ['./chinhsuasanphamvipon.component.css']
})
export class ChinhsuasanphamviponComponent implements OnInit {

    public sanphamvipon: any;
    public arrTaiKhoanEbay: any;
    constructor(private route: ActivatedRoute, 
        private quanLySanPhamViponService: QuanLySanPhamViponService,
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
    public laytaikhoan(id: string){
        this.quanLySanPhamViponService.GetOne(id).subscribe((data) => {
            this.sanphamvipon = data;
        }, (err) => {

        });
    }

    public chinhsuasanphamvipon(){
        this.quanLySanPhamViponService.UpdateOne(this.sanphamvipon._id, this.sanphamvipon).subscribe((data) => {
            this.toastr.success(SUCCESS.QUANLYTAIKHOANEBAY_UPDATE, 'Success!');
            this.router.navigate(['client/xemdanhsachsanphamvipon']);
        }, (err) => {

        });
    }

    //
    public changecheck(check){
        this.sanphamvipon.check = check;
    }

    //
    public changeprime(check){
        this.sanphamvipon.prime = check;
    }

    // 
    public getTaiKhoanEbay(){
        this.quanLyTaiKhoanEbayService.GetAll()
            .subscribe((data) => {
                this.arrTaiKhoanEbay = data;
            }, (err) => {   

            });
    }

}
