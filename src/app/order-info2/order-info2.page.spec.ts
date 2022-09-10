import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderInfo2Page } from './order-info2.page';

describe('OrderInfo2Page', () => {
  let component: OrderInfo2Page;
  let fixture: ComponentFixture<OrderInfo2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderInfo2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderInfo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
