import { Component, Output } from '@angular/core';
import { AppHeroListComponent } from '../../../heroes/app-hero-list/app-hero-list.component';
import { ListComponent } from '../../components/list/list.component';
import { FormHeroComponent } from '../../components/form-hero/form-hero.component';
import { CharacterDbz } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AppHeroListComponent, ListComponent, FormHeroComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  
  constructor(
    private dbzService:DbzService
  ){}
  get character():CharacterDbz[]{
    return [...this.dbzService.character]
  }

  deleteCharacterById(id:string):void{
    this.dbzService.deleteCharacterById(id)
  }
  onNewCharacter(character:CharacterDbz):void{
    this.dbzService.onNewCharacter(character)
  }
}
