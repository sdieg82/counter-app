import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterDbz } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  @Output()
  public deleteCharacter:EventEmitter<string>=new EventEmitter
  
  @Input()
  public characterList:CharacterDbz[]=[
    {
      name:'Trunks',
      power:100
    },
    {
      name:'Gotenks',
      power:100
    }
  ]

  onDeleteCharacter(id?:string):void{
    if(!id)return;
    console.log(id)
    this.deleteCharacter.emit(id)
  }
}
