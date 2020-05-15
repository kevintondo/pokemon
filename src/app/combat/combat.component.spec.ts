import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatComponent } from './combat.component';
import { viewClassName } from '@angular/compiler';
import { Pokemon } from './pokemon';

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

    const attackFirst = Pokemon.compareSpeed(pikachu, bulbasaur);

    expect(attackFirst).toBe("Pikachu");
  });

});
