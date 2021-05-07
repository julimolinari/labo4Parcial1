import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

 

  @Input() paisSeleccionado! : any;
  
  constructor(private db : DatabaseService) { 
    console.log(this.paisSeleccionado);
  }

  ngOnInit(): void {
  }

  

}
