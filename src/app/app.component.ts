import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterAppComponent } from "./counter/counter-app/counter-app.component";
import { AppHeroListComponent } from "./heroes/app-hero-list/app-hero-list.component";
import { HeroComponent } from "./heroes/hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CounterAppComponent,
    AppHeroListComponent,
    HeroComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   
}
