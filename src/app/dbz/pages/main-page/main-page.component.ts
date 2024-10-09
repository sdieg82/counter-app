import { Component } from '@angular/core';
import { AppHeroListComponent } from "../../../heroes/app-hero-list/app-hero-list.component";
import { ListComponent } from "../../components/list/list.component";
import { FormHeroComponent } from "../../components/form-hero/form-hero.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AppHeroListComponent, ListComponent, FormHeroComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
