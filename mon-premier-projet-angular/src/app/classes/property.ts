export class Property {
    label: string = '';
    score: number = 0;

    constructor(property: Property) {
        this.label = property.label;
        this.score = property.score;
    }
}