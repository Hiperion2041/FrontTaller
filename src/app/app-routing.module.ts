import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetenciaComponent } from './components/competencia/competencia.component';
import { LoginComponent } from './components/login/login.component';
import { AltaCompetenciaComponent } from './components/competencia/alta-competencia/alta-competencia.component';
import { AuthGuard } from './components/auth.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:"competencia", component:CompetenciaComponent,}, //canActivate: [AuthGuard]},
  {path:"alta-competencia",component:AltaCompetenciaComponent, canActivate: [AuthGuard]},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", redirectTo:"home",pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
