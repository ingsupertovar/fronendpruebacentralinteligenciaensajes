import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaciontipificacionComponent } from './creaciontipificacion.component';

describe('CreaciontipificacionComponent', () => {
  let component: CreaciontipificacionComponent;
  let fixture: ComponentFixture<CreaciontipificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaciontipificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaciontipificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
