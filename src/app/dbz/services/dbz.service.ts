import { Injectable } from '@angular/core';
import { CharacterDbz } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public character: CharacterDbz[] = [
    {
      id:uuid(),
      name: 'krillin',
      power: 500,
    },
    {
      id:uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id:uuid(),
      name: 'Vegeta',
      power: 9500,
    },
  ];

  onNewCharacter(character:CharacterDbz):void{
    const newCharacter:CharacterDbz={
      id:uuid(),
      ...character  
    }
    
    this.character.push(newCharacter)
  }

  // ondeleteCharacter(index:number){
  //   this.character.splice(index,1)
  // }

  deleteCharacterById(id:string){
    this.character=this.character.filter(character=>character.id!==id)
  }
}
