import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlysanphamamazonebayComponent } from './quanlysanphamamazonebay.component';

describe('QuanlysanphamamazonebayComponent', () => {
  let component: QuanlysanphamamazonebayComponent;
  let fixture: ComponentFixture<QuanlysanphamamazonebayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlysanphamamazonebayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlysanphamamazonebayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
