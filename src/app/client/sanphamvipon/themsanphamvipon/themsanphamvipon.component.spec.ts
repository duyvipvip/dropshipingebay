import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemsanphamviponComponent } from './themsanphamvipon.component';

describe('ThemsanphamviponComponent', () => {
  let component: ThemsanphamviponComponent;
  let fixture: ComponentFixture<ThemsanphamviponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemsanphamviponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemsanphamviponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
