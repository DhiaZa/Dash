import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelementComponent } from './felement.component';

describe('FelementComponent', () => {
  let component: FelementComponent;
  let fixture: ComponentFixture<FelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
