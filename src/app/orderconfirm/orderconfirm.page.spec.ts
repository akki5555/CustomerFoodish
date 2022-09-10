import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderconfirmPage } from './orderconfirm.page';

describe('OrderconfirmPage', () => {
  let component: OrderconfirmPage;
  let fixture: ComponentFixture<OrderconfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderconfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderconfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
