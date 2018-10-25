import { Component, OnInit } from '@angular/core';
import { QuanLySanPhamViponService } from 'src/@http-service/quanlysanphamvipon.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quanlysanphamvipon',
    templateUrl: './quanlysanphamvipon.component.html',
    styleUrls: ['./quanlysanphamvipon.component.css']
})
export class QuanlysanphamviponComponent implements OnInit {
    public danhSachSanPhamVipon: any;
    constructor(private quanLySanPhamViponService: QuanLySanPhamViponService,
        private router: Router) { }

    ngOnInit() {
        //
        this.getAllDanhSachTaiKhoanEbay();
    }

    // 
    public getAllDanhSachTaiKhoanEbay() {
        this.quanLySanPhamViponService.GetAll().subscribe((data) => {
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

}
