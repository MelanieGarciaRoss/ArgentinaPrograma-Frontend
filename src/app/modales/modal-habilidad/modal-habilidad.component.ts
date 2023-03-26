import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/entidades/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-habilidad',
  templateUrl: './modal-habilidad.component.html',
  styleUrls: ['./modal-habilidad.component.css']
})
export class ModalHabilidadComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private sHabilidad:HabilidadService) { 

this.form= this.formBuilder.group({
  habilidad:['',[Validators.required]],  
  porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],  
  personaid:[1],
})
}
  ngOnInit(): void {
  }
  get Habilidad(){
    return this.form.get("habilidad");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  onCreate(): void{
      this.sHabilidad.save(this.form.value).subscribe(data=>{
      alert("Habilidad Añadida");
      window.location.reload();
    });
  }

  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onCreate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
}
