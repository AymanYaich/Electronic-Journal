import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmniadvertiseComponent } from './admniadvertise.component';

describe('AdmniadvertiseComponent', () => {
  let component: AdmniadvertiseComponent;
  let fixture: ComponentFixture<AdmniadvertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmniadvertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmniadvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
