import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEmoComponent } from './demo.component';

describe('DEmoComponent', () => {
  let component: DEmoComponent;
  let fixture: ComponentFixture<DEmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DEmoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DEmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
