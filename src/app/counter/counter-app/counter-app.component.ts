import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})
export class CounterAppComponent {
  title = 'counter-app';
   public value:number=10

   increase(value:number){
      this.value +=value
   }
   reset():void{
    this.value =10
 }
}
