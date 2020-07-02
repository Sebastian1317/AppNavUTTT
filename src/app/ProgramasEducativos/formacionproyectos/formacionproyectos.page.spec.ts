import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormacionproyectosPage } from './formacionproyectos.page';

describe('FormacionproyectosPage', () => {
  let component: FormacionproyectosPage;
  let fixture: ComponentFixture<FormacionproyectosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacionproyectosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormacionproyectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
