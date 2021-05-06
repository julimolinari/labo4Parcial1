import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { BusquedaPeliculasComponent } from './page/busqueda-peliculas/busqueda-peliculas.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PeliculaAltaComponent } from './page/pelicula-alta/pelicula-alta.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ModificarPeliculaComponent } from './componentes/modificar-pelicula/modificar-pelicula.component';
import { LoginComponent } from './page/login/login.component';
import { AltaRepartidorComponent } from './componentes/alta-repartidor/alta-repartidor.component';
import { AltaComponent } from './page/alta/alta.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    BusquedaPeliculasComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    PeliculaAltaComponent,
    TablaActorComponent,
    ModificarPeliculaComponent,
    LoginComponent,
    AltaRepartidorComponent,    
    AltaComponent, TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,   
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
