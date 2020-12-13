import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndamentoCriacaoComponent } from './andamento-criacao.component';

describe('AndamentoCriacaoComponent', () => {
  let component: AndamentoCriacaoComponent;
  let fixture: ComponentFixture<AndamentoCriacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndamentoCriacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamentoCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
