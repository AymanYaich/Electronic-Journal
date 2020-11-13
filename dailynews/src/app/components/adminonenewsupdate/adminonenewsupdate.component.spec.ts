import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminonenewsupdateComponent } from './adminonenewsupdate.component';

describe('AdminonenewsupdateComponent', () => {
  let component: AdminonenewsupdateComponent;
  let fixture: ComponentFixture<AdminonenewsupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminonenewsupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminonenewsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
