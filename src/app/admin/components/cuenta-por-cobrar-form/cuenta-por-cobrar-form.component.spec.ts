import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaPorCobrarFormComponent } from './cuenta-por-cobrar-form.component';

describe('CuentaPorCobrarFormComponent', () => {
  let component: CuentaPorCobrarFormComponent;
  let fixture: ComponentFixture<CuentaPorCobrarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaPorCobrarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaPorCobrarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
