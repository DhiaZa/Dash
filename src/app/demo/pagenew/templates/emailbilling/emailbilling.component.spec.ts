import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailbillingComponent } from './emailbilling.component';

describe('EmailbillingComponent', () => {
  let component: EmailbillingComponent;
  let fixture: ComponentFixture<EmailbillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailbillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
