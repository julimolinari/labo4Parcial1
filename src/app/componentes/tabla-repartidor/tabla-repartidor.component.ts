import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-tabla-repartidor',
  templateUrl: './tabla-repartidor.component.html',
  styleUrls: ['./tabla-repartidor.component.css']
})
export class TablaRepartidorComponent implements OnInit {

 
  listaRepartidores: Repartidor[] = [];
  @Output() repartidorSeleccionado: EventEmitter<Repartidor> = new EventEmitter<Repartidor>();

  constructor(private db: DatabaseService) {

    
    db.getRepartidores().subscribe((resp: any) => {
      this.listaRepartidores = [];
      resp.forEach((element: any) => {
        let nuevorepa = new Repartidor(element.payload.doc.data().nombre, element.payload.doc.data().edad,
          element.payload.doc.data().capacidad, element.payload.doc.data().pais, element.payload.doc.data().unidadPropia);

        this.listaRepartidores.push(nuevorepa);
      });
    })


  }

  ngOnInit(): void {
  }

  public mandarRepartidor(item: Repartidor) {
    this.repartidorSeleccionado.emit(item);
  }

}
