import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBeerComponent } from './company-beer.component';

describe('CompanyBeerComponent', () => {
  let component: CompanyBeerComponent;
  let fixture: ComponentFixture<CompanyBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
