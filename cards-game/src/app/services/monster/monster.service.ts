import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.util';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  monsters: Monster[] = [];
  currentIndex: number = 1;

  constructor() { 
    this.load();
  }

  hello() {
    console.log("Coucou");
  }

  getAll(): Monster[] {
    return this.monsters.map(monster => monster.copy());
  }

  get(id: number): Monster | undefined {
    const monster = this.monsters.find(monster => monster.id === id);

    return monster ? monster.copy() : undefined;
  }

  add(monster : Monster): Monster {
    const monsterCopy = monster.copy();
    monsterCopy.id = this.currentIndex;

    this.monsters.push(monsterCopy.copy());
    this.currentIndex++;

    this.save();

    return monsterCopy;
  }

  update(monster: Monster): Monster {
    const monsterCopy = monster.copy();

    const monsterIndex = this.monsters.findIndex(monsterFound => monsterFound.id === monster.id);
    if(monsterIndex != -1) {
      this.monsters[monsterIndex] = monsterCopy.copy();
    }

    this.save();

    return monsterCopy;
  }

  delete (id: number): void {
    const monsterIndex = this.monsters.findIndex(monsterFound => monsterFound.id === id);

    if(monsterIndex != -1) {
      this.monsters.splice(monsterIndex, 1);
    }

    this.save();
  }

  private save() {
    localStorage.setItem('monsters', JSON.stringify(this.monsters));
  }

  private load() {
    const monsterData = localStorage.getItem('monsters');

    if(monsterData) {
      this.monsters = JSON.parse(monsterData).map((monsterJSON: any) => Object.assign(new Monster(), monsterJSON));

      this.currentIndex = Math.max(...this.monsters.map(monster => monster.id));
    } else {
      this.init();
      this.save();
    }
  }

  private init() {
    const monster1 = new Monster();
    monster1.id = this.currentIndex;
    monster1.name = "Sala";
    monster1.hp = 40;
    monster1.image = "assets/img/salameche.webp";
    monster1.type = MonsterType.FIRE;
    monster1.figureCaption = "N°002 Sala";
    this.currentIndex++;
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.id = this.currentIndex;
    monster2.name = "Cara";
    monster2.image = "assets/img/carapuce.webp";
    monster2.type = MonsterType.WATER;
    monster2.hp = 80;
    monster2.figureCaption = "N°003 Cara";
    this.currentIndex++;
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.id = this.currentIndex;
    monster3.name = "Bulb";
    monster3.image = "assets/img/bulbizarre.webp";
    monster3.type = MonsterType.PLANT;
    monster3.hp = 80;
    monster3.figureCaption = "N°004 Bulb";
    this.currentIndex++;
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.id = this.currentIndex;
    monster4.name = "Rept";
    monster4.image = "assets/img/reptincel.webp";
    monster4.type = MonsterType.FIRE;
    monster4.hp = 80;
    monster4.figureCaption = "N°005 Rept";
    this.currentIndex++;
    this.monsters.push(monster4);
  }
}
