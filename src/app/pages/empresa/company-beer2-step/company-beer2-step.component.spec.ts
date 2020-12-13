import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBeer2StepComponent } from './company-beer2-step.component';

describe('CompanyBeer2StepComponent', () => {
  let component: CompanyBeer2StepComponent;
  let fixture: ComponentFixture<CompanyBeer2StepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBeer2StepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBeer2StepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
