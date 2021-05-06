import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../clases/pelicula';
import { DatabaseService } from './database.service';


@Injectable({
  providedIn: 'root'
})
export class TraerPeliculasServicioService {
  nuevaPeli!: Pelicula;
  listaPeliculas: Pelicula[] = [];
  titulos!: string;
  constructor(private httpClient: HttpClient, private db: DatabaseService) { }

  public cargarPeliculasdesdeAPI() {

    this.httpClient.get('http://www.omdbapi.com/?s=harry&apikey=a8d854de').subscribe((resp: any) => {

      for (let index = 0; index < resp.Search.length; index++) {
        const element = resp.Search[index];

        this.nuevaPeli = new Pelicula(index, element.Title, element.Type,
          element.Year, element.imdbID, element.Poster, []);

          console.log(this.nuevaPeli.nombre);

          this.db.crearPelicula(this.nuevaPeli);

        // this.db.getPeliculaBy(this.nuevaPeli.nombre).then((peli:any) =>{
        //   console.log(peli.docs.length);
        //   if(peli.docs.length == 0){
        //     console.log("agrego " + this.nuevaPeli.id + this.nuevaPeli.nombre);
        //   }else{
        //     console.log("encontro " +  this.nuevaPeli.id + this.nuevaPeli.nombre);
        //   }

        // });

      }
    });
  }

  // public pruebaPeli(){
  //   return this.httpClient.get('https://api.themoviedb.org/3/movie/551?api_key=dc2b026b92edd17a3482b6e41d94ba69');
  // }
}
//