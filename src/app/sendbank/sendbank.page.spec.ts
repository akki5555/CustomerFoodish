import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendbankPage } from './sendbank.page';

describe('SendbankPage', () => {
  let component: SendbankPage;
  let fixture: ComponentFixture<SendbankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendbankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendbankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
