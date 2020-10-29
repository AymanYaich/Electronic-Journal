import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtnewsComponent } from './artnews.component';

describe('ArtnewsComponent', () => {
  let component: ArtnewsComponent;
  let fixture: ComponentFixture<ArtnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
