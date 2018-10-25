import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemsanphamviponComponent } from './xemsanphamvipon.component';

describe('XemsanphamviponComponent', () => {
  let component: XemsanphamviponComponent;
  let fixture: ComponentFixture<XemsanphamviponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemsanphamviponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemsanphamviponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
