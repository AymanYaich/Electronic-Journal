import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmoreContentComponent } from './readmore-content.component';

describe('ReadmoreContentComponent', () => {
  let component: ReadmoreContentComponent;
  let fixture: ComponentFixture<ReadmoreContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmoreContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmoreContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
