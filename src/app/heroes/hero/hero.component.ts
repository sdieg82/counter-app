import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string='Venom';
  public age:number=45;
  public nameIf:boolean=true

  get capitalized():string{
    return this.name.toUpperCase()
  }

  getDescription():string{
    return `${this.name} - ${this.age}`
  }

  nameChange():void{
    this.name='spiderman'
    this.nameIf=false
  }

  ageChange():void{
    this.age=25
  }
  agePlus(){
    this.age +=1
  }
}
