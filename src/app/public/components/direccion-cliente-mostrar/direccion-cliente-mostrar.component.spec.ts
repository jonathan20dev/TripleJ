import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionClienteMostrarComponent } from './direccion-cliente-mostrar.component';

describe('DireccionClienteMostrarComponent', () => {
  let component: DireccionClienteMostrarComponent;
  let fixture: ComponentFixture<DireccionClienteMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionClienteMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionClienteMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
