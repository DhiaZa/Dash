import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailcompComponent } from './emailcomp.component';

describe('EmailcompComponent', () => {
  let component: EmailcompComponent;
  let fixture: ComponentFixture<EmailcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
