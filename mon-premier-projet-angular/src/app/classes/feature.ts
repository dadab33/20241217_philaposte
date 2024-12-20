import { Geometry } from "./geometry";
import { Property } from "./property";

export class Feature {
    type: string = '';
    geometry?: Geometry;
    properties: Property;

    constructor(feature: Feature) {
        this.type = feature.type;
        this.properties = new Property(feature.properties);
    }
}