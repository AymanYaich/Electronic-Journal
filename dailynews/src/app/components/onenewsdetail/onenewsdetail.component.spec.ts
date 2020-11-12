import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnenewsdetailComponent } from './onenewsdetail.component';

describe('OnenewsdetailComponent', () => {
  let component: OnenewsdetailComponent;
  let fixture: ComponentFixture<OnenewsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnenewsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnenewsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
