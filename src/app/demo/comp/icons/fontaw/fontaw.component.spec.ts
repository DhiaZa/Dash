import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontawComponent } from './fontaw.component';

describe('FontawComponent', () => {
  let component: FontawComponent;
  let fixture: ComponentFixture<FontawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
