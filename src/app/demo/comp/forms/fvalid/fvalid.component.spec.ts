import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FvalidComponent } from './fvalid.component';

describe('FvalidComponent', () => {
  let component: FvalidComponent;
  let fixture: ComponentFixture<FvalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FvalidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
