import { ingredients } from "../Common/ingradient.model";

export class RecepieModel {
    public name : string  ;
    public description: string  ;
    public imageUrl : string  ;
    public ingredients : ingredients[];

    constructor(name : string , description : string , imageUrl : string , ingredient : ingredients[] ) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.ingredients = ingredient;
    }

}