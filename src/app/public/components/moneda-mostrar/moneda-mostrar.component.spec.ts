import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedaMostrarComponent } from './moneda-mostrar.component';

describe('MonedaMostrarComponent', () => {
  let component: MonedaMostrarComponent;
  let fixture: ComponentFixture<MonedaMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonedaMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedaMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
