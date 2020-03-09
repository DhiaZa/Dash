import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadvancedComponent } from './fadvanced.component';

describe('FadvancedComponent', () => {
  let component: FadvancedComponent;
  let fixture: ComponentFixture<FadvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
