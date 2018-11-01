import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsuasanphamamazonebayComponent } from './chinhsuasanphamamazonebay.component';

describe('ChinhsuasanphamamazonebayComponent', () => {
  let component: ChinhsuasanphamamazonebayComponent;
  let fixture: ComponentFixture<ChinhsuasanphamamazonebayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinhsuasanphamamazonebayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhsuasanphamamazonebayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
