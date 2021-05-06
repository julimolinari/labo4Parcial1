import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda-peliculas',
  templateUrl: './busqueda-peliculas.component.html',
  styleUrls: ['./busqueda-peliculas.component.css']
})
export class BusquedaPeliculasComponent implements OnInit {

  peliculaSeleccionada! : Pelicula;
  constructor() { }

  ngOnInit(): void {
  }

    public peliculaRecibida(peliculaSeleccionada : Pelicula){
      this.peliculaSeleccionada = peliculaSeleccionada;
    }
}
