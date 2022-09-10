import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificaionPage } from './verificaion.page';

describe('VerificaionPage', () => {
  let component: VerificaionPage;
  let fixture: ComponentFixture<VerificaionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificaionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificaionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
