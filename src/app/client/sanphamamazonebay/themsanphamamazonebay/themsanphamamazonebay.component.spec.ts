import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemsanphamamazonebayComponent } from './themsanphamamazonebay.component';

describe('ThemsanphamamazonebayComponent', () => {
  let component: ThemsanphamamazonebayComponent;
  let fixture: ComponentFixture<ThemsanphamamazonebayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemsanphamamazonebayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemsanphamamazonebayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
