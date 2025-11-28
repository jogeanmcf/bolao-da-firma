import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherJogo } from './escolher-jogo';

describe('EscolherJogo', () => {
  let component: EscolherJogo;
  let fixture: ComponentFixture<EscolherJogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolherJogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolherJogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
