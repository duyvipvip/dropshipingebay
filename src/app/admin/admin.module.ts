import { NgModule } from '@angular/core';
import { AdiminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
    imports: [AdiminRoutingModule,
        ToastrModule.forRoot()
    ],
    exports: [],
    declarations: [AdminComponent],
    providers: [],
})
export class AdminModule { }
