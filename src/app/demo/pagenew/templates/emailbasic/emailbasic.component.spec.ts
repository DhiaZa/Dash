import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailbasicComponent } from './emailbasic.component';

describe('EmailbasicComponent', () => {
  let component: EmailbasicComponent;
  let fixture: ComponentFixture<EmailbasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailbasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
