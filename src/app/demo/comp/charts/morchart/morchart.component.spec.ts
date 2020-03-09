import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorchartComponent } from './morchart.component';

describe('MorchartComponent', () => {
  let component: MorchartComponent;
  let fixture: ComponentFixture<MorchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
