import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteFormationComponent } from './carte-formation.component';

describe('CarteFormationComponent', () => {
  let component: CarteFormationComponent;
  let fixture: ComponentFixture<CarteFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
