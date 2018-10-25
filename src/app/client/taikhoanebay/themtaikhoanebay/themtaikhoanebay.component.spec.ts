import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemtaikhoanebayComponent } from './themtaikhoanebay.component';

describe('ThemtaikhoanebayComponent', () => {
  let component: ThemtaikhoanebayComponent;
  let fixture: ComponentFixture<ThemtaikhoanebayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemtaikhoanebayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemtaikhoanebayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
