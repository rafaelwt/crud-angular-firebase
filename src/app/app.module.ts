import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
 import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Rutas
import { APP_ROUTING } from './app.routes';
// Servicios
import { ApiService } from './core/services/api.service';
import { HeroesService } from './core/services/heroes.service';
import { BuscadorComponent } from './personeria/buscador/buscador.component';
import { KeysPipe } from './pipes/keys.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HeroesService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
