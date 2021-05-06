import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/servicios/github.service';
import { TraerPeliculasServicioService } from 'src/app/servicios/traer-peliculas-servicio.service';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.css']
})
export class BienvenidosComponent implements OnInit {
miInfo! : any;
  constructor(private gitHub : GithubService) {

    this.gitHub.obtenerGit().subscribe((resp:any) => {
      console.log(resp);
      this.miInfo = resp;
        
        
      

    })

   }

  ngOnInit(): void {
  }

}
