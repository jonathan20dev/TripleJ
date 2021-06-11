import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantonMostrarComponent } from './canton-mostrar.component';

describe('CantonMostrarComponent', () => {
  let component: CantonMostrarComponent;
  let fixture: ComponentFixture<CantonMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantonMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantonMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
