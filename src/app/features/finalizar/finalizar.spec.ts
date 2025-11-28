import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Finalizar } from './finalizar';

describe('Finalizar', () => {
  let component: Finalizar;
  let fixture: ComponentFixture<Finalizar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Finalizar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Finalizar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
