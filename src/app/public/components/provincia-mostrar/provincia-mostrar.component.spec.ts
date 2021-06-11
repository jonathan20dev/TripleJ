import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaMostrarComponent } from './provincia-mostrar.component';

describe('ProvinciaMostrarComponent', () => {
  let component: ProvinciaMostrarComponent;
  let fixture: ComponentFixture<ProvinciaMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinciaMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinciaMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
