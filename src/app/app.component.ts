import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AutenticacionService } from './servicios/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcialMolinari';
  boton! : string;
  constructor(private aut : AutenticacionService){

    aut.currentUser().then((resp:any) => {
      if(resp.uid == null){
       this.boton = "Login";
      }else{
        this.boton = "Cerrar Sesión";
      }
    })
  }

  cerrar(){
    this.aut.cerrarsesion().then(resp =>{
      Swal.fire({
        icon: 'success',
        text: 'Se cerro la sesion!',
        title: 'Adios'
      })

    })
  }
}
