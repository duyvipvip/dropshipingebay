import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuanLyTaiKhoanEbayService } from 'src/@http-service/quanlyttaikhhoanebay.service';
import { SUCCESS } from 'src/@http-service/config/messages';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-chinhsuataikhoanebay',
    templateUrl: './chinhsuataikhoanebay.component.html',
    styleUrls: ['./chinhsuataikhoanebay.component.css']
})
export class ChinhsuataikhoanebayComponent implements OnInit {
    public taikhoanebay: any;
    constructor(private route: ActivatedRoute, 
        private quanLyTaiKhoanEbayService: QuanLyTaiKhoanEbayService,
        private toastr: ToastrService,
        private router: Router) {
        this.route.params.subscribe((params: Params) => {
            const idtaikhoanebay = params['id'];
            //
            this.laytaikhoanebay(idtaikhoanebay);
        })
    }

    ngOnInit() {

    }

    // 
    public laytaikhoanebay(id: string){
        this.quanLyTaiKhoanEbayService.GetOne(id).subscribe((data) => {
            this.taikhoanebay = data;
        }, (err) => {

        });
    }

    public chinhsuataikhoanebay(){
        this.quanLyTaiKhoanEbayService.UpdateOne(this.taikhoanebay._id, this.taikhoanebay).subscribe((data) => {
            this.toastr.success(SUCCESS.QUANLYTAIKHOANEBAY_UPDATE, 'Success!');
            this.router.navigate(['client/xemdanhsachtaikhoanebay']);
        }, (err) => {

        });
    }

}
