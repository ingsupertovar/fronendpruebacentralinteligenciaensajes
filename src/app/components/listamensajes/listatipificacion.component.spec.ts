import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamensajesComponent } from './listamensajes.component';

describe('ListatipificacionComponent', () => {
  let component: ListamensajesComponent;
  let fixture: ComponentFixture<ListamensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListamensajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
