import { Component, Output } from '@angular/core';
import { AppHeroListComponent } from '../../../heroes/app-hero-list/app-hero-list.component';
import { ListComponent } from '../../components/list/list.component';
import { FormHeroComponent } from '../../components/form-hero/form-hero.component';
import { CharacterDbz } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AppHeroListComponent, ListComponent, FormHeroComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  @Output()
  public characterList: CharacterDbz[] = [
    {
      name: 'krillin',
      power: 500,
    },
    {
      name: 'Goku',
      power: 9500,
    },
  ];
}
