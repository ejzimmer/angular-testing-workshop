import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDependencyTestComponent } from './service-dependency-test.component';
import { HintBoxComponent } from '../hint-box/hint-box.component';

describe('ServiceDependencyTestComponent', () => {
  let component: ServiceDependencyTestComponent;
  let fixture: ComponentFixture<ServiceDependencyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDependencyTestComponent, HintBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDependencyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
