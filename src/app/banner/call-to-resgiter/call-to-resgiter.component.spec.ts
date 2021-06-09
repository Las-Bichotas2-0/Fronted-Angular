import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToResgiterComponent } from './call-to-resgiter.component';

describe('CallToResgiterComponent', () => {
  let component: CallToResgiterComponent;
  let fixture: ComponentFixture<CallToResgiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallToResgiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToResgiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
