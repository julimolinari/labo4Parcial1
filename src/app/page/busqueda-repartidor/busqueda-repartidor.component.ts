import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-busqueda-repartidor',
  templateUrl: './busqueda-repartidor.component.html',
  styleUrls: ['./busqueda-repartidor.component.css']
})
export class BusquedaRepartidorComponent implements OnInit {

  repartidorSeleccionado! : Repartidor;
  constructor() { }

  ngOnInit(): void {
  }

    public repartidorRecibido(repartidorSeleccionado : Repartidor){
      this.repartidorSeleccionado = repartidorSeleccionado;
    }

}
