import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Habilidad } from 'src/app/entidades/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  @Input() isLogged = false;
  @Input() habilidades: Habilidad[] = []; 

  @Output() recargandoPortfolio = new EventEmitter<any>();
  

  constructor(private tokenService: TokenService, private sHabilidad:HabilidadService, private router: Router) { }

  ngOnInit(): void {
    this.cargarHabilidad();
    console.log("lista de habilidades :",this.habilidades);
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidad():void{
    this.sHabilidad.lista().subscribe(
      {
         next: data => {
          this.habilidades=data;
          console.log("Habilidades :",this.habilidades);
         },
         error: err => {
          console.error("error en status: ",err.status);
          console.error("mensaje de error: ",err.message);
         },
         complete: () => {
          console.log("Habilidades: Lectura completada");
         }
      }
    );  
  }

  delete(id:number | undefined){
    if(id != undefined){
      this.sHabilidad.delete(id).subscribe(
        data =>{
          alert("Habilidad eliminada correctamente")
          this.cargarHabilidad();
        }, err =>{
          alert("no se pudo eliminar la habilidad");
        }  
      )
    }
  }

  editar(id:number | undefined) {
    this.router.navigate([`/editHab/${id}`])
    }

  agregar() {
    this.router.navigate(["/addHab"]);
  }

}

