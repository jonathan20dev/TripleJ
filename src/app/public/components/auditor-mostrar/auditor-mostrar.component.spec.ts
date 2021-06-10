import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorMostrarComponent } from './auditor-mostrar.component';

describe('AuditorMostrarComponent', () => {
  let component: AuditorMostrarComponent;
  let fixture: ComponentFixture<AuditorMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
