import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasCreditoMostrarComponent } from './notas-credito-mostrar.component';

describe('NotasCreditoMostrarComponent', () => {
  let component: NotasCreditoMostrarComponent;
  let fixture: ComponentFixture<NotasCreditoMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasCreditoMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasCreditoMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
