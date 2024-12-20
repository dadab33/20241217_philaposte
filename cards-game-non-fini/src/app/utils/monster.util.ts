export enum MonsterType {
    PLANT = 'plant',
    WATER = 'water',
    FIRE = 'fire'
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} = {
    [MonsterType.PLANT]: {
        imageUrl: 'assets/img/plante.png',
        color: 'rgb(135,255,124)'
    },
    [MonsterType.WATER]: {
        imageUrl: 'assets/img/eau.png',
        color: 'rgb(124,135,255)'
    },
    [MonsterType.FIRE]: {
        imageUrl: 'assets/img/feu.png',
        color: 'rgb(255,124,135)'
    }
}