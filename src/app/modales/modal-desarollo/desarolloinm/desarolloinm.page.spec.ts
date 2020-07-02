import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesarolloinmPage } from './desarolloinm.page';

describe('DesarolloinmPage', () => {
  let component: DesarolloinmPage;
  let fixture: ComponentFixture<DesarolloinmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarolloinmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesarolloinmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
