import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintBoxComponent } from './hint-box.component';

describe('HintBoxComponent', () => {
  let component: HintBoxComponent;
  let fixture: ComponentFixture<HintBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
