import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasDebitoMostrarComponent } from './notas-debito-mostrar.component';

describe('NotasDebitoMostrarComponent', () => {
  let component: NotasDebitoMostrarComponent;
  let fixture: ComponentFixture<NotasDebitoMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasDebitoMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasDebitoMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
