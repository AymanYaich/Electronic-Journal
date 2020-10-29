import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomynewsComponent } from './economynews.component';

describe('EconomynewsComponent', () => {
  let component: EconomynewsComponent;
  let fixture: ComponentFixture<EconomynewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomynewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
