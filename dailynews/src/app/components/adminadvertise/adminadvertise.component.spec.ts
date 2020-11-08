import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminadvertiseComponent } from './adminadvertise.component';

describe('AdminadvertiseComponent', () => {
  let component: AdminadvertiseComponent;
  let fixture: ComponentFixture<AdminadvertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminadvertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminadvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
