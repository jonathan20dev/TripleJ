import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaPorCobrarMostrarComponent } from './cuenta-por-cobrar-mostrar.component';

describe('CuentaPorCobrarMostrarComponent', () => {
  let component: CuentaPorCobrarMostrarComponent;
  let fixture: ComponentFixture<CuentaPorCobrarMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaPorCobrarMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaPorCobrarMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
