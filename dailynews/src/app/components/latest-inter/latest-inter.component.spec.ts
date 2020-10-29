import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestInterComponent } from './latest-inter.component';

describe('LatestInterComponent', () => {
  let component: LatestInterComponent;
  let fixture: ComponentFixture<LatestInterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestInterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
