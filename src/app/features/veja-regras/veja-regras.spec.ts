import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VejaRegras } from './veja-regras';

describe('VejaRegras', () => {
  let component: VejaRegras;
  let fixture: ComponentFixture<VejaRegras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VejaRegras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VejaRegras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
