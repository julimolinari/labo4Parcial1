import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.css']
})
export class DetalleRepartidorComponent implements OnInit {

  @Input() repartidorSeleccionado! : any;
  
  constructor(private db : DatabaseService) { 
    console.log(this.repartidorSeleccionado);
  }

  ngOnInit(): void {
  }

  public limpiar(){
    this.repartidorSeleccionado = null ;
  }

  

}
