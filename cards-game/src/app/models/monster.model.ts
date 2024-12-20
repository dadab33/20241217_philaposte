import { MonsterType } from "../utils/monster.util";

export class Monster {
    id: number = -1;
    name: string = "My Monster";
    image: string = 'assets/img/salameche.webp';
    type: MonsterType = MonsterType.FIRE;
    hp: number = 40;
    figureCaption: string = "N°001 Monster";
    attackName : string = "Geo Impact";
    attackStrength: number = 60;
    attackDescription: string = "This is a long test description attack";

    copy(): Monster {
        return Object.assign(new Monster(), this);
    }
}