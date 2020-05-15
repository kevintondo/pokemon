import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatComponent } from './combat.component';
import { viewClassName } from '@angular/compiler';
import { Pokemon } from './pokemon';
import { compareSpeed, fight } from './pokemon';

describe('CombatComponent', () => {
  let component: CombatComponent;
  let fixture: ComponentFixture<CombatComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return Pikachu', () => {
    const pikachu = new Pokemon("Pikachu", 200, 50, 10);
    const bulbasaur = new Pokemon("Bulbasaur", 150, 70, 25);

    const attackFirst = compareSpeed(pikachu, bulbasaur);

    expect(attackFirst).toBe("Pikachu");
  });

  it('should return Bulbasaur', () => {
    const pikachu = new Pokemon("Pikachu", 200, 50, 10);
    const bulbasaur = new Pokemon("Bulbasaur", 150, 70, 25);

    const winner = fight(pikachu, bulbasaur);

    expect(winner).toBe("Bulbasaur wins !");
  });

  it('should return Pikachu', () => {
    const pikachu = new Pokemon("Pikachu", 200, 150, 30);
    const bulbasaur = new Pokemon("Bulbasaur", 150, 70, 25);

    const winner = fight(pikachu, bulbasaur);

    expect(winner).toBe("Pikachu wins !");
  });

});
