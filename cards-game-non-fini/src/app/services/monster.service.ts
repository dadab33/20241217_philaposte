import { Injectable } from '@angular/core';
import { Monster } from '../classes/monster';
import { MonsterType } from '../utils/monster.util';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  monsters: Monster[] = [];
  currentIndex: number = 1;

  constructor() {
    this.load();
  }

  getAll() {
    return this.monsters.map(m => m.copy());
  }

  get(id: number): Monster | undefined {
    const monster = this.monsters.find(m => m.id == id);
    return monster ? monster.copy() : undefined;
  }

  addMonster(monster: Monster): Monster {
    var monsterCopy = monster.copy();
    monsterCopy.id = this.currentIndex;
    this.monsters.push(monsterCopy.copy());
    this.currentIndex += 1;
    this.save();

    return monsterCopy;
  }

  updateMonster(monster: Monster): Monster {
    const monsterCopy = monster.copy();
    const monsterIndex = this.monsters.findIndex(m => m.id == monster.id);

    if(monsterIndex != -1) {
      this.monsters[monsterIndex] = monsterCopy.copy();
      this.save();
    }

    return monsterCopy;
  }

  deleteMonster(id: number) {
    const monsterIndex = this.monsters.findIndex(m => m.id == id);
    if(monsterIndex != -1) {
      this.monsters.splice(monsterIndex, 1);
      this.save();
    }
  }

  private save () {
    localStorage.setItem('monsters', JSON.stringify(this.monsters));
  }

  private load() {
    const monstersData = localStorage.getItem('monsters');

    if(monstersData) {
      this.monsters = JSON.parse(monstersData).map((monsterJSON: any) => Object.assign(new Monster(), monsterJSON));
      this.currentIndex = Math.max(...this.monsters.map(m => m.id)) + 1;
    } else {
      this.init();
      this.save();
    }
  }

  private init() {
    const monster1 = new Monster();
    monster1.id = this.currentIndex;
    this.currentIndex += 1;
    monster1.name = 'Carapuce';
    monster1.image = 'assets/img/carapuce.webp';
    monster1.type = MonsterType.WATER;
    monster1.hp = 40;
    monster1.figCaption = '001 Carapuce';

    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.id = this.currentIndex;
    this.currentIndex += 1;
    monster2.name = 'Salamèche';
    monster2.image = 'assets/img/salameche.webp';
    monster2.type = MonsterType.FIRE;
    monster2.hp = 30;
    monster2.figCaption = '007 Salamèche';

    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.id = this.currentIndex;
    this.currentIndex += 1;
    monster3.name = 'Bulbizarre';
    monster3.image = 'assets/img/bulbizarre.webp';
    monster3.type = MonsterType.PLANT;
    monster3.hp = 50;
    monster3.figCaption = '004 Bulbizarre';

    this.monsters.push(monster3);
  }
}
