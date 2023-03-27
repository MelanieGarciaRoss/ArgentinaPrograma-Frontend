import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit{
  persona: Persona | undefined;
  isLogged: boolean=false;
  constructor(public personaService: PersonaService, private tokenService: TokenService, private router: Router) { }
  
  ngOnInit(): void {
    this.cargarPersona();
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  
  cargarPersona():void{
    this.personaService.detail(1).subscribe(data => 
      {
        this.persona=data;
        console.log(data);
      });
  }

  editar(id:number | undefined) {
    this.router.navigate([`/editPersona/${id}`])
  }

}

