import { TestBed } from '@angular/core/testing';

import { TipificacionesService } from './mensajes.service';

describe('TipificacionesService', () => {
  let service: TipificacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipificacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
