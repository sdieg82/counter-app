import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string='Venom';
  public age:number=45;

  get capitalized():string{
    return this.name.toUpperCase()
  }

  get description():string{
    return `${this.name} - ${this.age}`
  }
}
