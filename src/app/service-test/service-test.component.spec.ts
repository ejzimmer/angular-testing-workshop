import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTestComponent } from './service-test.component';
import { HintBoxComponent } from '../hint-box/hint-box.component';

describe('ServiceTestComponent', () => {
  let component: ServiceTestComponent;
  let fixture: ComponentFixture<ServiceTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTestComponent, HintBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
