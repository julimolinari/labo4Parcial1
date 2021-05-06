import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { DatabaseService } from 'src/app/servicios/database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  nuevaPelicula!: Pelicula;
  id: number = 0;
  ultimoId!: number;
  public inputNombre = '';
  public inputTipo = '';
  public inputFecha = '';
  public inputPoster = '';
  public inputCantidad = '';  
  public inputActores = '';  
  actorElegido! : Actor;
  // public inputActores!: Actor[];
  // public inputActoresRecibidos! : Actor[];
  inputActoresRecibidos : Array<any> = [];

  constructor(private db: DatabaseService) {
    let max = 10;
    db.getPeliculasBase().subscribe(resp => {
      resp.forEach((element: any) => {
        let id = +element.payload.doc.id;
        if (id > max) {
          max = id;
        }
      });
      this.ultimoId = max + 1;
    });
  }

  ngOnInit(): void {
  }



  public reciboActor(actorRecibido : Actor)
{  
  let aux = '';
  console.log(actorRecibido);
  
  aux = this.inputActores;
  this.inputActores = actorRecibido.nombre +' | '+ aux ;
  this.inputActoresRecibidos.push(actorRecibido.ToJSON());
//  this.inputActores.push(this.actorElegido);

}


  public cargarPeli() {
    // let id= this.db.utlimoId();
    // id = id+1;

    this.nuevaPelicula = new Pelicula(this.ultimoId, this.inputNombre, this.inputTipo, this.inputFecha, this.inputCantidad, this.inputPoster, this.inputActoresRecibidos);
    this.db.crearPelicula(this.nuevaPelicula).then(res => {
      Swal.fire({
        icon: 'success',
        text: 'La pelicula se creó correctamente!',
        title: 'Cargada'
      })


    })

  }

}
