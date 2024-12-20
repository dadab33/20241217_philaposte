import { Feature } from "./feature";

export class SearchResultOptim {
    type: string = '';
    version: string = '';
    features: Feature[] = [];

    constructor(searchResult: SearchResultOptim) {
        this.type = searchResult.type;
        this.version = searchResult.version;
        
        searchResult.features.forEach(feature => {
            this.features.push(new Feature(feature));
        });
    }
}