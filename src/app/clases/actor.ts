export class Actor {

    
    nombre! : string;
    edad! : number;    
    foto! : string;


    constructor(nombre : string,edad: number,foto:string){
        
        this.nombre = nombre;
        this.edad = edad;
        this.foto = foto;
        
    }

    public ToJSON(){
        return {"nombre" : this.nombre , "edad" : this.edad ,"foto" : this.foto};
    }
}
