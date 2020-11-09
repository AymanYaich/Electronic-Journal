import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminonenewsComponent } from './adminonenews.component';

describe('AdminonenewsComponent', () => {
  let component: AdminonenewsComponent;
  let fixture: ComponentFixture<AdminonenewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminonenewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminonenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
