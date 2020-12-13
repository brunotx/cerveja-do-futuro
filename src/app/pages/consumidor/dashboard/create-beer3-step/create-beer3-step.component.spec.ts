import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBeer3StepComponent } from './create-beer3-step.component';

describe('CreateBeer3StepComponent', () => {
  let component: CreateBeer3StepComponent;
  let fixture: ComponentFixture<CreateBeer3StepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBeer3StepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBeer3StepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
