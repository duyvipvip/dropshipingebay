import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { QuanlytaikhoanebayComponent } from './quanlytaikhoanebay/quanlytaikhoanebay.component';
import { ThemtaikhoanebayComponent } from './themtaikhoanebay/themtaikhoanebay.component';
import { ChinhsuataikhoanebayComponent } from './chinhsuataikhoanebay/chinhsuataikhoanebay.component';
import { XemtaikhoanebayComponent } from './xemtaikhoanebay/xemtaikhoanebay.component';


const routes: Routes = [
    {
        path: '', component: ClientComponent,
        children: [
            // { path: '', component: HomeComponent },
            { path: 'xemdanhsachtaikhoanebay', component: QuanlytaikhoanebayComponent },
            { path: 'themtaikhoanebay', component: ThemtaikhoanebayComponent },
            { path: 'chinhsuataikhoanebay/:id', component: ChinhsuataikhoanebayComponent },
            { path: 'xemtaikhoanebay/:id', component: XemtaikhoanebayComponent },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule { }
