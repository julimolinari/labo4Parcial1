import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaRepartidorComponent } from './busqueda-repartidor.component';

describe('BusquedaRepartidorComponent', () => {
  let component: BusquedaRepartidorComponent;
  let fixture: ComponentFixture<BusquedaRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
