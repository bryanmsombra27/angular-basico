import { Component } from "@angular/core";

    @Component({
        selector:"app-contador",
        templateUrl:"./contador.component.html"
    })
    export class ContadorComponent{
        title:string = 'Contador App';
        contador:number = 0;
        base:number =5;
      
        incremento(){
          this.contador++;
        }
      
        decremento(){
          if(this.contador> 0){
            this.contador--;
          }
        }
        
        acumular(valor:number){
          this.contador += valor;
          
       
          
       
        }
      
    }