import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "src/app/components/home/home.component";
import { NosotrosComponent } from "src/app/components/nosotros/nosotros.component";
import { ConsultasComponent } from "src/app/components/consultas/consultas.component";
import { PreguntasFrecuentesComponent } from "src/app/components/preguntas-frecuentes/preguntas-frecuentes.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'preguntasFrecuentes', component: PreguntasFrecuentesComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: '*', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
