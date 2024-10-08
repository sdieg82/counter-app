import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-hero-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-hero-list.component.html',
  styleUrl: './app-hero-list.component.css'
})
export class AppHeroListComponent {
  public heroesNames:string[]=['spiderman','ironman','venom','ego']
  public deletedHero?:string=''
  eraseHero(){
    const newHero=this.heroesNames.pop()
    this.deletedHero=newHero
  }
}
