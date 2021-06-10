import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonoMostrarComponent } from './abono-mostrar.component';

describe('AbonoMostrarComponent', () => {
  let component: AbonoMostrarComponent;
  let fixture: ComponentFixture<AbonoMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonoMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonoMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
