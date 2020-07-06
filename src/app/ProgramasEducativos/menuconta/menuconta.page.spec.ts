import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenucontaPage } from './menuconta.page';

describe('MenucontaPage', () => {
  let component: MenucontaPage;
  let fixture: ComponentFixture<MenucontaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucontaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenucontaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
