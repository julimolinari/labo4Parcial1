import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { DatabaseService } from 'src/app/servicios/database.service';
import { TraerPeliculasServicioService } from 'src/app/servicios/traer-peliculas-servicio.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  listaPeliculas: Pelicula[] = [];
  @Output() peliculaSeleccionada: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  constructor(traerPelicula: TraerPeliculasServicioService, db: DatabaseService) {

    
    db.getPeliculasBase().subscribe((resp: any) => {
      this.listaPeliculas = [];
      resp.forEach((element: any) => {
        let nuevaPeli = new Pelicula(element.payload.doc.id, element.payload.doc.data().nombre, element.payload.doc.data().tipo,
          element.payload.doc.data().fechaDeEstreno, element.payload.doc.data().cantidadDePublico, element.payload.doc.data().foto, element.payload.doc.data().Actores);

        this.listaPeliculas.push(nuevaPeli);
      });
    })


  }

  ngOnInit(): void {
  }

  public mandarPeli(item: Pelicula) {
    this.peliculaSeleccionada.emit(item);
  }
}
