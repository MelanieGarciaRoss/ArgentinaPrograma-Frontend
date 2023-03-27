import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ModalEditarEduComponent } from './modales/modal-editar-edu/modal-editar-edu.component';
import { ModalEditarExpComponent } from './modales/modal-editar-exp/modal-editar-exp.component';
import { ModalEditarHabComponent } from './modales/modal-editar-hab/modal-editar-hab.component';
import { ModalPersonaComponent } from './modales/modal-editar-persona/modal-persona.component';


const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editExp/:id', component: ModalEditarExpComponent},
  { path: 'addExp', component: ModalEditarExpComponent},
  { path: 'editEducacion/:id', component: ModalEditarEduComponent},
  { path: 'addEducacion', component: ModalEditarEduComponent},
  { path: 'editPersona/:id', component: ModalPersonaComponent},
  { path: 'editHab/:id', component: ModalEditarHabComponent},
  { path: 'addHab', component: ModalEditarHabComponent},
  { path: '**', redirectTo: 'portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
