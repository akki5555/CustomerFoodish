import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestroInfoPage } from './restro-info.page';

describe('RestroInfoPage', () => {
  let component: RestroInfoPage;
  let fixture: ComponentFixture<RestroInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestroInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestroInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
