import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/entidades/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { of } from  'rxjs';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit{
  isLogged=false;
  isLogginFail=false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password! :string;
  roles:string[]=[];
  errMsj!:string;


  constructor(private tokenService: TokenService, private authService: AuthService,private router: Router){}
  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLogginFail=false;
      this.roles=this.tokenService.getAuthorities();
      
    }
  }
  
  onLogin():void{
    this.loginUsuario=new LoginUsuario(this.nombreUsuario,this.password);
    this.authService.login(this.loginUsuario).subscribe({
        next: data => {
          this.isLogged=true;
          this.isLogginFail=false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles=data.authorities;
          this.router.navigate(["/"]);
        },
         error: err => {
          this.isLogged=false;
          this.isLogginFail=true;
          this.errMsj="Error: Usuario o clave incorrecta";
          console.log(this.errMsj);
        },
        complete: () => {
         console.log("Habilidades: Lectura completada");
        }
     });  
   }
}