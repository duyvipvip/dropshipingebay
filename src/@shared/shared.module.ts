import { UserService } from './../@http-service/user.service';
import { RoomService } from './../@http-service/room.service';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatSelectModule, MatTableModule, MatTabsModule, MatIconModule} from '@angular/material';
import { CommonModule } from '../../node_modules/@angular/common';
import { CdkTableModule } from '@angular/cdk/table'
import { ModalModule } from '../../node_modules/ngx-bootstrap/modal';
import { CKEditorModule } from 'ngx-ckeditor';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MatSelectModule,
        CdkTableModule,
        MatTableModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatIconModule,
        CKEditorModule,
        ModalModule.forRoot()
    ],
    exports: [
        FormsModule,
        HttpClientModule,
        MatSelectModule, 
        CommonModule,
        CdkTableModule,
        MatTableModule,
        ReactiveFormsModule,
        ModalModule,
        MatTabsModule,
        CKEditorModule,
        MatIconModule
    ],
    declarations: [],
    providers: [RoomService, UserService],
})
export class SharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
            ],
        };
    }
}
