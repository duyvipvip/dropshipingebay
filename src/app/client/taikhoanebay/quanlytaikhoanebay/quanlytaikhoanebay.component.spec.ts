import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlytaikhoanebayComponent } from './quanlytaikhoanebay.component';

describe('QuanlytaikhoanebayComponent', () => {
  let component: QuanlytaikhoanebayComponent;
  let fixture: ComponentFixture<QuanlytaikhoanebayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlytaikhoanebayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlytaikhoanebayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
