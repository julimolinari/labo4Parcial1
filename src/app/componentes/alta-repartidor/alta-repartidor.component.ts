import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from 'src/app/clases/pais';
import { Repartidor } from 'src/app/clases/repartidor';
import { DatabaseService } from 'src/app/servicios/database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  public forma!: FormGroup;
  inputSeleccionado!: string;
  unidadPropia = false;

  @Input() paisSeleccionado!: Pais;

  constructor(private fb: FormBuilder, private db: DatabaseService) {


  }

  ngOnInit(): void {

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spaceValidator]],
      'DNI': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'capacidad': ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2)]],
      'flexRadioDefault': ['', [Validators.required]],

    });
  }

  public radio(valor: boolean) {
    this.unidadPropia = valor;
  }


  public aceptar() {

    let repartidor = new Repartidor(this.forma.get('nombre')!.value, this.forma.get('edad')!.value, this.forma.get('capacidad')!.value, this.paisSeleccionado, this.unidadPropia);
    console.log(repartidor);
    this.db.crearRepartidor(repartidor).then(() => {

      Swal.fire({
        icon: 'success',
        text: 'La repartidor se creo correctamente!',
        title: 'Creado'
      })
    }
    );

  }

  private spaceValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const espacios = nombre.includes(' ');

    if (espacios) {
      return {
        contieneEspacios: true
      };
    } else {
      return null;
    }
  }


}
