import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritoMostrarComponent } from './distrito-mostrar.component';

describe('DistritoMostrarComponent', () => {
  let component: DistritoMostrarComponent;
  let fixture: ComponentFixture<DistritoMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistritoMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistritoMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
