import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  
  listaPaises : Array<any> = [];
  paisElegido! : Pais;

  @Output() paisSeleccionado : EventEmitter <Pais> = new EventEmitter <Pais>();
  constructor(private pais : ServicioPaisesService) { 

    this.pais.obtenerImagenes().subscribe((resp:any) =>{
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        const bandera = element.flag;
        const nombre = element.name;
        this.paisElegido = new Pais(bandera, nombre); 
        
        this.listaPaises.push({bandera,nombre});
        // console.log(this.listaPaises);
      }
    })
  }

  ngOnInit(): void {
  }


  public mandarPais(item : Pais){
    this.paisSeleccionado.emit(item);
    
  }
}
