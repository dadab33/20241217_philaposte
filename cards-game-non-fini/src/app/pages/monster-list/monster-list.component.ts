import { Component, computed, inject, signal } from '@angular/core';
import { MonsterService } from '../../services/monster.service';
import { Monster } from '../../classes/monster';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { CardComponent } from "../../components/card/card.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-monster-list',
  imports: [SearchBarComponent, CardComponent],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {
  search = signal<string>('');
  monsters = signal<Monster[]>([]);
  filteredMonsters = computed(() => {
    return this.monsters().filter(monster => monster.name.includes(this.search()))
  });
  monsterService = inject(MonsterService);
  router = inject(Router);

  constructor() {
    this.monsters.set(this.monsterService.getAll());
  }

  addMonster() {
    this.router.navigate(['monster']);
  }
}
