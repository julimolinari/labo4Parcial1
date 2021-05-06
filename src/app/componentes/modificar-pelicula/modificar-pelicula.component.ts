import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculaAltaComponent } from 'src/app/page/pelicula-alta/pelicula-alta.component';
import { DatabaseService } from 'src/app/servicios/database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {

  @Input() peliculaSeleccionada! : any;

  
  
  constructor(private db : DatabaseService) { 
    console.log(this.peliculaSeleccionada);
    
  }

  ngOnInit(): void {
  }

  public limpiar(){
    this.peliculaSeleccionada = null;
  }

 

  public confirmar(){

    this.db.crearPelicula(this.peliculaSeleccionada).then(res => {
      Swal.fire({
        icon: 'success',
        text: 'La pelicula se editó correctamente!',
        title: 'Actualizada'
      })

      this.limpiar();


    })

    

  }

}
