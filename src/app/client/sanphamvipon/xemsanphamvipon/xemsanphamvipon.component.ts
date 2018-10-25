import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { QuanLySanPhamViponService } from 'src/@http-service/quanlysanphamvipon.service';

@Component({
    selector: 'app-xemsanphamvipon',
    templateUrl: './xemsanphamvipon.component.html',
    styleUrls: ['./xemsanphamvipon.component.css']
})
export class XemsanphamviponComponent implements OnInit {

    public sanphamvipon: any;
    constructor(private quanLySanPhamViponService: QuanLySanPhamViponService,
        private route: ActivatedRoute,
        private router: Router) {
        this.route.params.subscribe((params: Params) => {
            const id = params['id'];
            //
            this.laysanphamvipon(id);
        })
    }

    ngOnInit() {

    }

    //
    public laysanphamvipon(id: string) {
        this.quanLySanPhamViponService.GetOne(id).subscribe((data) => {
            this.sanphamvipon = data;
        }, (err) => {

        });
    }

    //
    public xemdanhsachsanphamvipon() {
        this.router.navigate(['/client/xemdanhsachsanphamvipon'])
    }

    //
    public chinhsuasanphamvipon(id: string) {
        this.router.navigate(['/client/chinhsuasanphamvipon', id])
    }

}
