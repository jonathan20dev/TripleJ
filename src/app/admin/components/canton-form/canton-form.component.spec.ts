import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantonFormComponent } from './canton-form.component';

describe('CantonFormComponent', () => {
  let component: CantonFormComponent;
  let fixture: ComponentFixture<CantonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
