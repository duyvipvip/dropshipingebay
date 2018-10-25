import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemtaikhoanebayComponent } from './xemtaikhoanebay.component';

describe('XemtaikhoanebayComponent', () => {
  let component: XemtaikhoanebayComponent;
  let fixture: ComponentFixture<XemtaikhoanebayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemtaikhoanebayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemtaikhoanebayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
