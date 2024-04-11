import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetenciaComponent } from './components/competencia/competencia.component';
import { LoginComponent } from './components/login/login.component';
import { AltaCompetenciaComponent } from './components/competencia/alta-competencia/alta-competencia.component';
import { AuthGuard } from './components/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:"competencia", component:CompetenciaComponent, canActivate: [AuthGuard]},
  {path:"alta-competencia",component:AltaCompetenciaComponent, canActivate: [AuthGuard]},
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"**", redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
