import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemsinfoPage } from './itemsinfo.page';

describe('ItemsinfoPage', () => {
  let component: ItemsinfoPage;
  let fixture: ComponentFixture<ItemsinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
