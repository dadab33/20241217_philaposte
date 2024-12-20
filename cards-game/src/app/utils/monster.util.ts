export enum MonsterType {
    PLANT = 'plant',
    FIRE = 'fire',
    WATER = 'water'
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} = {
    [MonsterType.PLANT]: {
        imageUrl: 'assets/img/bulbizarre.webp',
        color: 'rgb(135, 255, 124)'
    },
    [MonsterType.FIRE]: {
        imageUrl: 'assets/img/salameche.webp',
        color: 'rgb(255, 104, 104)'
    },
    [MonsterType.WATER]: {
        imageUrl: 'assets/img/carapuce.webp',
        color: 'rgb(135, 124 , 255)'
    }
}