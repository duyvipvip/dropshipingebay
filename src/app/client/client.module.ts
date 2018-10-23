import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client.routing';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { MenuclientComponent } from './layoutclient/menuclient/menuclient.component';
import { HeaderclientComponent } from './layoutclient/headerclient/headerclient.component';
import { FooterclientComponent } from './layoutclient/footerclient/footerclient.component';


@NgModule({
    imports: [ClientRoutingModule, 
    
    ],
    exports: [],
    declarations: [ClientComponent, HomeComponent, MenuclientComponent, HeaderclientComponent, FooterclientComponent],
    providers: [],
})
export class ClientModule { }
