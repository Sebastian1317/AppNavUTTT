import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetPage } from './pet.page';

describe('PetPage', () => {
  let component: PetPage;
  let fixture: ComponentFixture<PetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
