import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from ".//app-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { PreguntasFrecuentesComponent } from "./components/preguntas-frecuentes/preguntas-frecuentes.component";
import { ConsultasComponent } from "./components/consultas/consultas.component";
import { Plan2064Component } from "./components/plan2064/plan2064.component";
import { Plan2063Component } from "./components/plan2063/plan2063.component";
import { Plan2061Component } from "./components/plan2061/plan2061.component";
import { ContactoComponent } from "./components/contacto/contacto.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    PreguntasFrecuentesComponent,
    ConsultasComponent,
    Plan2064Component,
    Plan2063Component,
    Plan2061Component,
    ContactoComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
