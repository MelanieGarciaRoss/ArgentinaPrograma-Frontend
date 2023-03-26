import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { interceptorProvider } from './servicios/interceptor-service';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { ModalEditarEduComponent } from './modales/modal-editar-edu/modal-editar-edu.component';
import { ModalEditarExpComponent } from './modales/modal-editar-exp/modal-editar-exp.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ModalHabilidadComponent } from './modales/modal-habilidad/modal-habilidad.component';
import { ModalEditarHabComponent } from './modales/modal-editar-hab/modal-editar-hab.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    BannerComponent,
    PortfolioComponent,
    ModalLoginComponent,
    ModalEducacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ModalEditarEduComponent,
    ModalEditarExpComponent,
    ModalExperienciaComponent,
    ModalHabilidadComponent,
    ModalEditarHabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
