import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboteComponent } from './abote.component';

describe('AboteComponent', () => {
  let component: AboteComponent;
  let fixture: ComponentFixture<AboteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
