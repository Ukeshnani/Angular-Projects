import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingsComponent } from './headings.component';

describe('HeadingsComponent', () => {
  let component: HeadingsComponent;
  let fixture: ComponentFixture<HeadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
