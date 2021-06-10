import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucuralFormComponent } from './sucural-form.component';

describe('SucuralFormComponent', () => {
  let component: SucuralFormComponent;
  let fixture: ComponentFixture<SucuralFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucuralFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucuralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
