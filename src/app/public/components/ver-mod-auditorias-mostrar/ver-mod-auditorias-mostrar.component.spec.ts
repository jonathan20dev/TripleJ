import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerModAuditoriasMostrarComponent } from './ver-mod-auditorias-mostrar.component';

describe('VerModAuditoriasMostrarComponent', () => {
  let component: VerModAuditoriasMostrarComponent;
  let fixture: ComponentFixture<VerModAuditoriasMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerModAuditoriasMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerModAuditoriasMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
