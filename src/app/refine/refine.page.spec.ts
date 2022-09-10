import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefinePage } from './refine.page';

describe('RefinePage', () => {
  let component: RefinePage;
  let fixture: ComponentFixture<RefinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
