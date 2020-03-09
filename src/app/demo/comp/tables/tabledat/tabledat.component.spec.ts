import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledatComponent } from './tabledat.component';

describe('TabledatComponent', () => {
  let component: TabledatComponent;
  let fixture: ComponentFixture<TabledatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabledatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabledatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
