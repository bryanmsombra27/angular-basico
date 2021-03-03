import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.services';

import{Personaje} from "../../interfaces/dbz.interfaz";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  // personajes:Personaje[ ] = [];

  nuevo:Personaje={
    nombre:'koso',
    poder:14500
  } 
  // get personajes():Personaje[] {
  //   return this.dbzService.personajes;
  // }
  constructor() { 
      // this.personajes = this.dbzService.personajes;
  }

  ngOnInit(): void {
  }




}
