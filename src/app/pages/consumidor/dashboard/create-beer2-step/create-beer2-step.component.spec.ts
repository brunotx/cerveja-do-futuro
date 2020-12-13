import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBeer2StepComponent } from './create-beer2-step.component';

describe('CreateBeer2StepComponent', () => {
  let component: CreateBeer2StepComponent;
  let fixture: ComponentFixture<CreateBeer2StepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBeer2StepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBeer2StepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
