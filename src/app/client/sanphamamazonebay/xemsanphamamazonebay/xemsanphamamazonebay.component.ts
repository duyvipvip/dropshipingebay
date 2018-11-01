import { Component, OnInit } from '@angular/core';
import { QuanLySanPhamAmazonEbayService } from 'src/@http-service/quanlysanphamamazonebay.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-xemsanphamamazonebay',
  templateUrl: './xemsanphamamazonebay.component.html',
  styleUrls: ['./xemsanphamamazonebay.component.css']
})
export class XemsanphamamazonebayComponent implements OnInit {

  public sanphamvipon: any;
    constructor(private quanLySanPhamAmazonEbayService: QuanLySanPhamAmazonEbayService,
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
        this.quanLySanPhamAmazonEbayService.GetOne(id).subscribe((data) => {
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
