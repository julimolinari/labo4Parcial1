import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaSeleccionada! : any;
  
  constructor(private db : DatabaseService) { 
    console.log(this.peliculaSeleccionada);
  }

  ngOnInit(): void {
  }

  public limpiar(){
    this.peliculaSeleccionada = null ;
  }

  public borrarPelicula(){

    this.db.deletePelicula(this.peliculaSeleccionada.id);
    this.limpiar();

  }

}
