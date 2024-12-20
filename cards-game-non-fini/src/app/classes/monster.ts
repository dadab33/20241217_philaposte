import { MonsterType } from "../utils/monster.util";

export class Monster {
    id: number = 0;
    name: string = 'My monster';
    type: MonsterType = MonsterType.WATER;
    image: string = '';
    hp: number = 0;
    figCaption: string = 'N°001 Monster';
    attackName: string = 'Mon attaque !';
    attackStrength: number = 0;
    attackDecription: string = 'Descritpion de mon attaque';  

    copy(): Monster {
        return Object.assign(new Monster(), this);
    }
}