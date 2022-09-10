import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliverymanPage } from './deliveryman.page';

describe('DeliverymanPage', () => {
  let component: DeliverymanPage;
  let fixture: ComponentFixture<DeliverymanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliverymanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
