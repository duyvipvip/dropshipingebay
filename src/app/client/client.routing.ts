import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ThemtaikhoanebayComponent } from './taikhoanebay/themtaikhoanebay/themtaikhoanebay.component';
import { ChinhsuataikhoanebayComponent } from './taikhoanebay/chinhsuataikhoanebay/chinhsuataikhoanebay.component';
import { XemtaikhoanebayComponent } from './taikhoanebay/xemtaikhoanebay/xemtaikhoanebay.component';
import { QuanlysanphamviponComponent } from './sanphamvipon/quanlysanphamvipon/quanlysanphamvipon.component';
import { ThemsanphamviponComponent } from './sanphamvipon/themsanphamvipon/themsanphamvipon.component';
import { ChinhsuasanphamviponComponent } from './sanphamvipon/chinhsuasanphamvipon/chinhsuasanphamvipon.component';
import { XemsanphamviponComponent } from './sanphamvipon/xemsanphamvipon/xemsanphamvipon.component';
import { QuanlytaikhoanebayComponent } from './taikhoanebay/quanlytaikhoanebay/quanlytaikhoanebay.component';


const routes: Routes = [
    {
        path: '', component: ClientComponent,
        children: [
            // { path: '', component: HomeComponent },
            { path: 'xemdanhsachtaikhoanebay', component: QuanlytaikhoanebayComponent },
            { path: 'themtaikhoanebay', component: ThemtaikhoanebayComponent },
            { path: 'chinhsuataikhoanebay/:id', component: ChinhsuataikhoanebayComponent },
            { path: 'xemtaikhoanebay/:id', component: XemtaikhoanebayComponent },

            { path: 'xemdanhsachsanphamvipon', component: QuanlysanphamviponComponent },
            { path: 'themsanphamvipon', component: ThemsanphamviponComponent },
            { path: 'chinhsuasanphamvipon/:id', component: ChinhsuasanphamviponComponent },
            { path: 'xemsanphamvipon/:id', component: XemsanphamviponComponent },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule { }
