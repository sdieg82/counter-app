import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterDbz } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-hero',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule],
  templateUrl: './form-hero.component.html',
  styleUrl: './form-hero.component.css'
})
export class FormHeroComponent {
  @Output()
  public onEventEmitter:EventEmitter<CharacterDbz>=new EventEmitter


  public character:CharacterDbz={
    name:'',
    power:0
  }

  addCharacter(){
    console.log(this.character)
    if(this.character.name.length===0) return;
    this.onEventEmitter.emit(this.character)
    this.character={
      name:'',
      power:0
    }
  }
}
