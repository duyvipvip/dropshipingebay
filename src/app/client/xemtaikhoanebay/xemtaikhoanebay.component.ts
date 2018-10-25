import { Component, OnInit } from '@angular/core';
import { QuanLyTaiKhoanEbayService } from 'src/@http-service/quanlyttaikhhoanebay.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-xemtaikhoanebay',
    templateUrl: './xemtaikhoanebay.component.html',
    styleUrls: ['./xemtaikhoanebay.component.css']
})
export class XemtaikhoanebayComponent implements OnInit {
    public taikhoanebay: any;
    constructor(private quanLyTaiKhoanEbayService: QuanLyTaiKhoanEbayService,
        private route: ActivatedRoute,
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

    //
    public xemtaikhoantaikhoanebay(){
        this.router.navigate(['/client/xemdanhsachtaikhoanebay'])
    }

    //
    public chinhsuataikhoanebay(id: string){
        this.router.navigate(['/client/chinhsuataikhoanebay', id])
    }
}
