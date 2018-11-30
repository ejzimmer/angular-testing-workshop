import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsComponent } from './contents.component';
import { ResultsComponent } from '../results/results.component';

describe('ContentsComponent', () => {
  let component: ContentsComponent;
  let fixture: ComponentFixture<ContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsComponent, ResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
