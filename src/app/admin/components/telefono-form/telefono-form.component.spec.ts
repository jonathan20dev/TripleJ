import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoFormComponent } from './telefono-form.component';

describe('TelefonoFormComponent', () => {
  let component: TelefonoFormComponent;
  let fixture: ComponentFixture<TelefonoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
