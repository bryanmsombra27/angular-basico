import { Injectable } from "@angular/core";
import { Personaje } from '../../interfaces/dbz.interfaz';
@Injectable()
export class DbzService{
  private _personajes:Personaje[] = [
        {nombre:"Krilin",poder:700},
        {nombre:"goku",poder:15000},
        {nombre:"vegeta",poder:8500},
      ];
    constructor(){
        }

        get personajes():Personaje[]{
            //en js todos los objetos son pasados por referencia 
            //de esta forma rompemos la referencia de los objetos
            return [...this._personajes];    
        }
    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
}