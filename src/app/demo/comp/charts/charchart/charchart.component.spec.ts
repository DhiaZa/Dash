import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharchartComponent } from './charchart.component';

describe('CharchartComponent', () => {
  let component: CharchartComponent;
  let fixture: ComponentFixture<CharchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
