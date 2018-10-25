import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsuasanphamviponComponent } from './chinhsuasanphamvipon.component';

describe('ChinhsuasanphamviponComponent', () => {
  let component: ChinhsuasanphamviponComponent;
  let fixture: ComponentFixture<ChinhsuasanphamviponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinhsuasanphamviponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhsuasanphamviponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
