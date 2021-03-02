import { Component } from "@angular/core";

@Component({
    selector: 'app-listado',
    templateUrl:"./listado.component.html"
})
export class ListadoComponent{
    title:string = "Listado de Heroes";
    heroe:string="";
    heroes:string[] = ["Spiderman","hulk","Ironman","Thor"];

    borrarHeroe(){
        // this.heroes.find(()=>this.heroes[index]);
       this.heroe = this.heroes.shift() || "";
        console.log(this.heroes);

    }
}