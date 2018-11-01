import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootRoutingModule } from './app.routing';
import { Page404ComponentComponent } from './page404-component/page404-component.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        Page404ComponentComponent,
    ],
    imports: [
        RootRoutingModule,
       
        BrowserModule,
        FormsModule,
        AuthModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(), // ToastrModule added
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
