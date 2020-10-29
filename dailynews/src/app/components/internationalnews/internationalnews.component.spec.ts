import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalnewsComponent } from './internationalnews.component';

describe('InternationalnewsComponent', () => {
  let component: InternationalnewsComponent;
  let fixture: ComponentFixture<InternationalnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
