import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestcontentsComponent } from './latestcontents.component';

describe('LatestcontentsComponent', () => {
  let component: LatestcontentsComponent;
  let fixture: ComponentFixture<LatestcontentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestcontentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestcontentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
