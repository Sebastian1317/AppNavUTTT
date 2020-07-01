import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeChapulhuacanPage } from './home-chapulhuacan.page';

describe('HomeChapulhuacanPage', () => {
  let component: HomeChapulhuacanPage;
  let fixture: ComponentFixture<HomeChapulhuacanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChapulhuacanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeChapulhuacanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
