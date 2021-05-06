import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiGuardGuard } from './guard/mi-guard.guard';
import { AltaComponent } from './page/alta/alta.component';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { BusquedaPeliculasComponent } from './page/busqueda-peliculas/busqueda-peliculas.component';
import { BusquedaRepartidorComponent } from './page/busqueda-repartidor/busqueda-repartidor.component';
import { LoginComponent } from './page/login/login.component';
import { PeliculaAltaComponent } from './page/pelicula-alta/pelicula-alta.component';



const routes: Routes = [
  { path: 'bienvenidos', component: BienvenidosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'alta', component: AltaComponent,canActivate: [MiGuardGuard]},
  { path: 'busqueda-repartidor', component: BusquedaRepartidorComponent,canActivate: [MiGuardGuard] },
  { path: 'peliculas/alta-peliculas', component: PeliculaAltaComponent },
  { path: '', component: BienvenidosComponent },
  { path: '**', component: BienvenidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
