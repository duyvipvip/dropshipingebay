import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlysanphamviponComponent } from './quanlysanphamvipon.component';

describe('QuanlysanphamviponComponent', () => {
  let component: QuanlysanphamviponComponent;
  let fixture: ComponentFixture<QuanlysanphamviponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlysanphamviponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlysanphamviponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
