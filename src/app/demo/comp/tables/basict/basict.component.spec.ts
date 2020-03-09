import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasictComponent } from './basict.component';

describe('BasictComponent', () => {
  let component: BasictComponent;
  let fixture: ComponentFixture<BasictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
