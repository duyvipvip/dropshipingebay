import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client.routing';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    imports: [ClientRoutingModule, 
    
    ],
    exports: [],
    declarations: [ClientComponent, HomeComponent],
    providers: [],
})
export class ClientModule { }
