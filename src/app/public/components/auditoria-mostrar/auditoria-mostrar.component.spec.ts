import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaMostrarComponent } from './auditoria-mostrar.component';

describe('AuditoriaMostrarComponent', () => {
  let component: AuditoriaMostrarComponent;
  let fixture: ComponentFixture<AuditoriaMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriaMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
