export class Pais {
    bandera!:string;
    nombre!:string;

    constructor(bandera : string,nombre : string){
        this.bandera=bandera;
        this.nombre = nombre;
    }


    public ToJSON(){
        return {"nombre" : this.nombre , "bandera" : this.bandera};
    }
}
