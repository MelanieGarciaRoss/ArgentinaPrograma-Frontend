import { Component, ViewChild } from '@angular/core';
import { Estudio } from 'src/app/entidades/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  isLogged:boolean=false;
  estudios: Estudio[]=[]; 
  
  constructor(private tokenService: TokenService, private sEstudio:EstudioService, private router: Router) { }

  ngOnInit(): void {
    this.cargarEstudio();
    if(this.tokenService.getToken()){
      this.isLogged = true;
      console.log("Token ",this.tokenService, " is logged:",this.isLogged);
    }else{
      this.isLogged = false;
    }
  }

  cargarEstudio():void{
    this.sEstudio.lista().subscribe(data => {this.estudios=data});
  }

  delete(id:number | undefined){
    if(id != undefined){
      this.sEstudio.delete(id).subscribe(
        data =>{
          alert("Estudio eliminado correctamente")
          this.cargarEstudio();
        }, err =>{
          alert("no se pudo eliminar la educacion")
        })
    }}

  editar(id:number | undefined) {
    this.router.navigate([`/editEducacion/${id}`])
    }

  agregar() {
    this.router.navigate(["/addEducacion"]);
  }
}

