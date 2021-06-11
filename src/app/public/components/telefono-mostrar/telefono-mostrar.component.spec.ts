import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoMostrarComponent } from './telefono-mostrar.component';

describe('TelefonoMostrarComponent', () => {
  let component: TelefonoMostrarComponent;
  let fixture: ComponentFixture<TelefonoMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonoMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonoMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
