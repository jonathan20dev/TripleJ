import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonosFormComponent } from './abonos-form.component';

describe('AbonosFormComponent', () => {
  let component: AbonosFormComponent;
  let fixture: ComponentFixture<AbonosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
