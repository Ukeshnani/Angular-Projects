import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOne1Component } from './form-one-1.component';

describe('FormOne1Component', () => {
  let component: FormOne1Component;
  let fixture: ComponentFixture<FormOne1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormOne1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormOne1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
