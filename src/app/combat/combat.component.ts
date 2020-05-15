import { Component, OnInit, Input } from '@angular/core';
import {attack, fight, Pokemon} from './pokemon';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  pokemon1 = new Pokemon('Pikachu', 200, 50, 10);
  pokemon2 = new Pokemon('Bulbasaur', 150, 70, 25);
  @Input() PlayPause: number=0;
  constructor() { }

  ngOnInit(): void {
  }

  handleController(): void{
    
    if(this.PlayPause){
      this.PlayPause =0;
    } else {
      this.PlayPause =1;
      attack(this.pokemon1, this.pokemon2);
    }
    


  }

}
