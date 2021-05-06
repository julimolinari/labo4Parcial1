import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  
  inputPaisNombre !: any;
  inputPais! : Pais;
  paisElegido! : Pais;

  constructor() { }

  public reciboPais(paisSeleccionado: Pais){
    this.paisElegido = paisSeleccionado;
    this.inputPaisNombre = this.paisElegido.nombre;
  }

  ngOnInit(): void {
  }

}
