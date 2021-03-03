import { Component, OnInit ,Input} from '@angular/core';

import{Personaje} from "../../interfaces/dbz.interfaz";
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  // @Input("data") personajes:Personaje[] = []; 

  nuevo:Personaje ={
    nombre:"",
    poder:0
  }
  constructor(private dbzService:DbzService) {

   }
   get personajes(){
     return this.dbzService.personajes;
   }

  ngOnInit(): void {
  }
  agregar():void{ 
    if(this.nuevo.nombre.trim()==""){
      return;
    }

    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:"",poder:0
    }
}
}
