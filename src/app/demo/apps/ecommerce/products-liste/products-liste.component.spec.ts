import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListeComponent } from './products-liste.component';

describe('ProductsListeComponent', () => {
  let component: ProductsListeComponent;
  let fixture: ComponentFixture<ProductsListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
