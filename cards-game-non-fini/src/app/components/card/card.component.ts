import { Component, computed, effect, input, OnChanges, OnInit } from '@angular/core';
import { Monster } from '../../classes/monster';
import { MonsterTypeProperties } from '../../utils/monster.util';

@Component({
  selector: 'phila-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  monster = input<Monster>(new Monster());

  monsterTypeIcon = computed(() => {
    return MonsterTypeProperties[this.monster().type].imageUrl;
  });

  backgroundColor = computed(() => {
    return MonsterTypeProperties[this.monster().type].color;
  });

  constructor() {
    effect(() => {
      console.log("Le monstre " + this.monster().name + " a évolué");
    });
  }
}
