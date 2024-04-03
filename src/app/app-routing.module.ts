import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetenciaComponent } from './components/competencia/competencia.component';
import { LoginComponent } from './components/login/login.component';
import { AltaCompetenciaComponent } from './components/competencia/alta-competencia/alta-competencia.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:"competencia", component:CompetenciaComponent},
  {path:"alta-competencia",component:AltaCompetenciaComponent},
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"**", redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
