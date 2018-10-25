import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client.routing';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { MenuclientComponent } from './layoutclient/menuclient/menuclient.component';
import { HeaderclientComponent } from './layoutclient/headerclient/headerclient.component';
import { FooterclientComponent } from './layoutclient/footerclient/footerclient.component';
import { QuanlytaikhoanebayComponent } from './quanlytaikhoanebay/quanlytaikhoanebay.component';
import { ThemtaikhoanebayComponent } from './themtaikhoanebay/themtaikhoanebay.component';
import { QuanLyTaiKhoanEbayService } from 'src/@http-service/quanlyttaikhhoanebay.service';
import { SharedModule } from 'src/@shared/shared.module';
import { ChinhsuataikhoanebayComponent } from './chinhsuataikhoanebay/chinhsuataikhoanebay.component';
import { XemtaikhoanebayComponent } from './xemtaikhoanebay/xemtaikhoanebay.component';

@NgModule({
    imports: [ClientRoutingModule, 
        SharedModule,
    ],
    exports: [],
    declarations: [ClientComponent, HomeComponent, MenuclientComponent, HeaderclientComponent, FooterclientComponent, QuanlytaikhoanebayComponent, ThemtaikhoanebayComponent, ChinhsuataikhoanebayComponent, XemtaikhoanebayComponent],
    providers: [QuanLyTaiKhoanEbayService],
})
export class ClientModule { }
