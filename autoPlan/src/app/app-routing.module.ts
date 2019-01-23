import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "src/app/components/home/home.component";
import { NosotrosComponent } from "src/app/components/nosotros/nosotros.component";
import { ConsultasComponent } from "src/app/components/consultas/consultas.component";
import { PreguntasFrecuentesComponent } from "src/app/components/preguntas-frecuentes/preguntas-frecuentes.component";
import { Plan2061Component } from "src/app/components/plan2061/plan2061.component";
import { Plan2063Component } from "src/app/components/plan2063/plan2063.component";
import { Plan2064Component } from "src/app/components/plan2064/plan2064.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'preguntasFrecuentes', component: PreguntasFrecuentesComponent },
  { path: 'consultas', component: ConsultasComponent },

  { path: 'plan/2061', component: Plan2061Component },
  { path: 'plan/2063', component: Plan2063Component },
  { path: 'plan/2064', component: Plan2064Component },

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
