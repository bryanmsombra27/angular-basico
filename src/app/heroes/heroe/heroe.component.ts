import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:"./heroe.component.html"
})
export class HeroeComponent{
    title:string = "Heroes App";
    nombre:string = "Iron man";
    edad:number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }
    cambiarNombre(){
        this.nombre ="Spiderman";
    }
    cambiarEdad(){
        this.edad = 30;
    }
}