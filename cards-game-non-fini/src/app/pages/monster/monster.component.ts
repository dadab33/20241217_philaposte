import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CardComponent } from "../../components/card/card.component";
import { Monster } from '../../classes/monster';
import { MonsterService } from '../../services/monster.service';

@Component({
  selector: 'app-monster',
  imports: [ReactiveFormsModule, CardComponent],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent implements OnInit {
  route = inject(ActivatedRoute);
  monsterId = signal<number|undefined>(undefined);
  formBuilder = inject(FormBuilder);
  monFormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    hp: [0, [Validators.required, Validators.min(10), Validators.max(200)]],
    figCaption: ['', []]
  });
  monster: Monster = Object.assign(new Monster(), this.monFormGroup.value);
  monsterService = inject(MonsterService);
  router = inject(Router);

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.monsterId.set(params['id']);

    this.monFormGroup.valueChanges.subscribe((values) => {
      this.monster = Object.assign(new Monster(), values);
    });

    this.route.params.subscribe((params) => {
      this.monsterId.set(params['id']);

      if(this.monsterId()) {
        var monsterFound = this.monsterService.get(this.monsterId()!);

        if(monsterFound) {
          this.monster = monsterFound;
          this.monFormGroup.patchValue(this.monster);
        }
      }
    });
  }

  onSubmit() {
    if (this.monsterId()) {
      this.monster.id = this.monsterId()!;
      this.monsterService.updateMonster(this.monster);
    } else {
      this.monsterService.addMonster(this.monster);
    }

    this.router.navigate(['/home']);
  }
}
