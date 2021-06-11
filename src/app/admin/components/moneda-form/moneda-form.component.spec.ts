import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedaFormComponent } from './moneda-form.component';

describe('MonedaFormComponent', () => {
  let component: MonedaFormComponent;
  let fixture: ComponentFixture<MonedaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonedaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
