import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemsanphamamazonebayComponent } from './xemsanphamamazonebay.component';

describe('XemsanphamamazonebayComponent', () => {
  let component: XemsanphamamazonebayComponent;
  let fixture: ComponentFixture<XemsanphamamazonebayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemsanphamamazonebayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemsanphamamazonebayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
