import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client.routing';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { MenuclientComponent } from './layoutclient/menuclient/menuclient.component';
import { HeaderclientComponent } from './layoutclient/headerclient/headerclient.component';
import { FooterclientComponent } from './layoutclient/footerclient/footerclient.component';
import { QuanLyTaiKhoanEbayService } from 'src/@http-service/quanlyttaikhhoanebay.service';
import { SharedModule } from 'src/@shared/shared.module';

import { QuanLySanPhamViponService } from 'src/@http-service/quanlysanphamvipon.service';
import { QuanlytaikhoanebayComponent } from './taikhoanebay/quanlytaikhoanebay/quanlytaikhoanebay.component';
import { ThemtaikhoanebayComponent } from './taikhoanebay/themtaikhoanebay/themtaikhoanebay.component';
import { ChinhsuataikhoanebayComponent } from './taikhoanebay/chinhsuataikhoanebay/chinhsuataikhoanebay.component';
import { XemtaikhoanebayComponent } from './taikhoanebay/xemtaikhoanebay/xemtaikhoanebay.component';
import { QuanlysanphamviponComponent } from './sanphamvipon/quanlysanphamvipon/quanlysanphamvipon.component';
import { ThemsanphamviponComponent } from './sanphamvipon/themsanphamvipon/themsanphamvipon.component';
import { ChinhsuasanphamviponComponent } from './sanphamvipon/chinhsuasanphamvipon/chinhsuasanphamvipon.component';
import { XemsanphamviponComponent } from './sanphamvipon/xemsanphamvipon/xemsanphamvipon.component';

@NgModule({
    imports: [ClientRoutingModule, 
        SharedModule,
    ],
    exports: [],
    declarations: [ClientComponent,
         HomeComponent,
         MenuclientComponent, 
         HeaderclientComponent, 
         FooterclientComponent, 
         QuanlytaikhoanebayComponent, 
         ThemtaikhoanebayComponent, 
         ChinhsuataikhoanebayComponent, 
         XemtaikhoanebayComponent, 
         QuanlysanphamviponComponent, 
         ThemsanphamviponComponent, 
         ChinhsuasanphamviponComponent, 
         XemsanphamviponComponent],
    providers: [QuanLyTaiKhoanEbayService, QuanLySanPhamViponService],
})
export class ClientModule { }
