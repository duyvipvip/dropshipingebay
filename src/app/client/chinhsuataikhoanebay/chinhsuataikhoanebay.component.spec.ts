import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsuataikhoanebayComponent } from './chinhsuataikhoanebay.component';

describe('ChinhsuataikhoanebayComponent', () => {
  let component: ChinhsuataikhoanebayComponent;
  let fixture: ComponentFixture<ChinhsuataikhoanebayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinhsuataikhoanebayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhsuataikhoanebayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
