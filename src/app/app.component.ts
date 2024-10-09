import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterAppComponent } from "./counter/components/counter-app/counter-app.component";
import { AppHeroListComponent } from "./heroes/app-hero-list/app-hero-list.component";
import { HeroComponent } from "./heroes/hero/hero.component";
import { MainPageComponent } from "./dbz/pages/main-page/main-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CounterAppComponent,
    AppHeroListComponent,
    HeroComponent,
    MainPageComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   
}
