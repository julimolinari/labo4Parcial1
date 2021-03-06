import { Pais } from "./pais";

export class Repartidor {


    nombre! : string;
    edad! : number;    
    capacidad! : string;
    pais! : Pais;
    unidadPropia! : boolean;


    constructor(nombre : string,edad: number,capacidad:string,pais:Pais,unidadPropia:boolean){
        
        this.nombre = nombre;
        this.edad = edad;
        this.capacidad = capacidad;
        this.pais = pais;
        this.unidadPropia = unidadPropia;
        
    }

    public ToJSON(){
        return {"nombre" : this.nombre , "edad" : this.edad ,"capacidad" : this.capacidad,
        "pais" : this.pais,
        "unidadPropia" : this.unidadPropia};
    }
}


