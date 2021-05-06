import { Actor } from "./actor";

export class Pelicula {
    
    id! : number;
    nombre! : string;
    tipo! : string;
    fechaDeEstreno! : string;
    cantidadDePublico! : string;
    foto! : string;
    actores! : Actor[];


    constructor(id : number,nombre : string,tipo: string,fechaDeEstreno:string,cantidadDePublico :string,foto:string,actores:Actor[]){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.foto = foto;
        this.actores = actores;
    }


    public toJSON(){
        return {"nombre" : this.nombre , "tipo" : this.tipo , "fechaDeEstreno" : this.fechaDeEstreno, "foto" : this.foto,
    "cantidadDePublico" : this.cantidadDePublico,"Actores" : this.actores};
    }


}
