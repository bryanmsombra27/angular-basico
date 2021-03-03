import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import { Personaje } from 'src/app/interfaces/dbz.interfaz';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  // propiedad para dar emision al componente padre
  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
  // @Input("nuevo") nuevo:Personaje = {
  //   nombre:"",
  //   poder:0
  // } 
  nuevo:Personaje ={
    nombre:"koso",
    poder:14000
  }
  constructor(private dbzService:DbzService) { }

  get personajes(){
      return this.dbzService.personajes;
  }

  ngOnInit(): void {
  }

  agregar():void{ 
    if(this.nuevo.nombre.trim()==""){
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo);
    //emitiendo el valor al componente padre
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo={
      nombre:"",poder:0
    }
}

}
