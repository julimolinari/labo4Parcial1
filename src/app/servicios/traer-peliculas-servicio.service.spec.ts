import { TestBed } from '@angular/core/testing';

import { TraerPeliculasServicioService } from './traer-peliculas-servicio.service';

describe('TraerPeliculasServicioService', () => {
  let service: TraerPeliculasServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerPeliculasServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
