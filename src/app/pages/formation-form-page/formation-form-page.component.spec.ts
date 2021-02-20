import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationFormPageComponent } from './formation-form-page.component';

describe('FormationFormPageComponent', () => {
  let component: FormationFormPageComponent;
  let fixture: ComponentFixture<FormationFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
