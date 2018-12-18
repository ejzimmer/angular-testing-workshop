import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAsyncTestComponent } from './service-async-test.component';
import { HintBoxComponent } from '../hint-box/hint-box.component';
import { FormsModule } from '@angular/forms';

describe('ServiceAsyncTestComponent', () => {
  let component: ServiceAsyncTestComponent;
  let fixture: ComponentFixture<ServiceAsyncTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAsyncTestComponent, HintBoxComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAsyncTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
