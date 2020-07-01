import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeTepetitlanPage } from './home-tepetitlan.page';

describe('HomeTepetitlanPage', () => {
  let component: HomeTepetitlanPage;
  let fixture: ComponentFixture<HomeTepetitlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTepetitlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTepetitlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
