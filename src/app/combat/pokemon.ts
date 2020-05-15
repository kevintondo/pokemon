import { Input } from '@angular/core';

export class Pokemon {

    @Input() PlayPause: number = 0;


    public nom = 'inconnu';
    public speed = 1;
    public life = 100;
    public attackValue = 5;
  static compareSpeed: any;
  
    constructor(nom: string = 'inconnu', speed: number, life: number , attackValue: number) {
      this.nom = nom;
      this.speed = speed;
      this.life = life;
      this.attackValue = attackValue;
    }
  
    public getNom() {
      return this.nom;
    }
  
  }
  
  export function compareSpeed(pokemon1: Pokemon, pokemon2: Pokemon) {
    if (pokemon1.speed > pokemon2.speed) {
      return pokemon1.nom;
    }  else {
      return pokemon2.nom;
    }
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  export function attack(pokemon1: Pokemon, pokemon2: Pokemon) {
      pokemon2.life -= pokemon1.attackValue;
      console.log(pokemon1.attackValue + ' points de vie !' );
    
    return pokemon2.life;
  }
  
  export function fight(a: Pokemon, b: Pokemon) {
    let premierTour = true;
    let premierPokemon;
    let secondPokemon;
  
    if (premierTour) {
      
      premierTour = false;
      if (compareSpeed(a, b) === a.nom) {
        premierPokemon = a;
        secondPokemon = b;
      } else {
        premierPokemon = b;
        const secondPokemon: Pokemon = a;
      }
    }
  
    console.log('Nouveau tour !');
  
    while (premierPokemon.life > 0 && secondPokemon.life > 0) {
      //console.log(premierPokemon.nom + ' attack !');
      attack(premierPokemon, secondPokemon);
      if (secondPokemon.life > 0) {
       // console.log(secondPokemon.nom + ' attack !');
        attack(secondPokemon, premierPokemon);
      }
  
    }
  
    if (premierPokemon.life > 0) {
      return(premierPokemon.nom + ' wins !');
    } else {;
      return (secondPokemon.nom + ' wins !');
    }



  }
