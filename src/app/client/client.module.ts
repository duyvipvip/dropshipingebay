import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client.routing';
import { ClientComponent } from './client.component';


@NgModule({
    imports: [ClientRoutingModule],
    exports: [],
    declarations: [ClientComponent],
    providers: [],
})
export class ClientModule { }
