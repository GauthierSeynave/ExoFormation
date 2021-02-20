import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationListePageComponent } from './formation-liste-page.component';

describe('FormationListePageComponent', () => {
  let component: FormationListePageComponent;
  let fixture: ComponentFixture<FormationListePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationListePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationListePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
