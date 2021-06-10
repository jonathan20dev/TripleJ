import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalMostrarComponent } from './sucursal-mostrar.component';

describe('SucursalMostrarComponent', () => {
  let component: SucursalMostrarComponent;
  let fixture: ComponentFixture<SucursalMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
