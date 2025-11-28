import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemVindo } from './bem-vindo';

describe('BemVindo', () => {
  let component: BemVindo;
  let fixture: ComponentFixture<BemVindo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BemVindo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BemVindo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
