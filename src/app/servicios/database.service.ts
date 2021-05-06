import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pelicula } from '../clases/pelicula';
import { Repartidor } from '../clases/repartidor';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db : AngularFirestore) { }

  public getPeliculaBy(param : string){
    return this.db.collection("peliculas", ref => ref.where('nombre', "==", param))
    .get().toPromise();
    // .then((querySnapshot:any) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch((error:any) => {
    //     console.log("Error getting documents: ", error);
    // });

  }

  public crearPelicula(peli : Pelicula){
    console.log(peli);
    return this.db.collection("peliculas").doc(peli.id.toString()).set(peli.toJSON());
  }
  public crearRepartidor(repartidor : Repartidor){
    
    return this.db.collection("repartidores").add(repartidor.ToJSON());
  }


  public getPeliculasBase(){
    return this.db.collection("peliculas").snapshotChanges();
  }

  public getActores(){
    return this.db.collection("actores").snapshotChanges();
  }


  public deletePelicula(id : number){
    this.db.collection("peliculas").doc(id.toString()).delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
    
  }



  // public utlimoId(){
  //   let max= 0;
    
  //   this.getPeliculas().subscribe((resp:any) => {
      
  //     resp.forEach((element:any) => {
  //       let id =+element.payload.doc.id;
  //       console.log('id=' +id+' max='+max);
  //       if( id> max){
  //         console.log("entra al IF")
  //         max = id;
  //         console.log('id=' +id+' max='+max);
  //       }
  //     });
  //   })
  //   return max+1;
  // }
}
