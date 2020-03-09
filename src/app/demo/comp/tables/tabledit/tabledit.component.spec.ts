import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableditComponent } from './tabledit.component';

describe('TableditComponent', () => {
  let component: TableditComponent;
  let fixture: ComponentFixture<TableditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
