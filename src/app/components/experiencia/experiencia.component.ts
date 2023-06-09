import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  isLogged:boolean = false;
  experiencias: Experiencia[]=[];
 
  constructor(private tokenService: TokenService, private sExperiencia: ExperienciaService, private router: Router) {  }

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.experiencias=data});    
  }

  delete(id:number| undefined){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data =>{
          alert("Experiencia eliminada correctamente")
          this.cargarExperiencia();
        }, err =>{
          alert("no se pudo eliminar la experiencia")
        })
  }}

  editar(id:number | undefined) {
    this.router.navigate([`/editExp/${id}`])
    }

  agregar() {
    this.router.navigate(["/addExp"]);
  }
}
