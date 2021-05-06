import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  listaActores! : any[];
  // actor! : Actor;
  @Output() actorSeleccionado : EventEmitter <Actor> = new EventEmitter <Actor>();

  constructor(private db : DatabaseService) { 
    let auxListadoMensaje = new Array();
    db.getActores().subscribe((resp:any) => {
      console.log(resp);
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        console.log(element.payload.doc.data().nombre);
        let actor;
        
        actor = new Actor(element.payload.doc.data().nombre,element.payload.doc.data().edad,element.payload.doc.data().foto);
        auxListadoMensaje.push(actor);
      }
      this.listaActores = auxListadoMensaje;
    })

  }
  public mandarActor(item : Actor){
    this.actorSeleccionado.emit(item);
  }

  ngOnInit(): void {
  }

}
