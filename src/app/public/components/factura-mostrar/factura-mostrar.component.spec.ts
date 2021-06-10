import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaMostrarComponent } from './factura-mostrar.component';

describe('FacturaMostrarComponent', () => {
  let component: FacturaMostrarComponent;
  let fixture: ComponentFixture<FacturaMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
