import { Ingredient } from '../shared/ingredient.module';

export class Recipe{
   public name: string;
   public description: string;
   public imagenPath: string;
   public ingredients :Ingredient [];

    constructor(name:string, description:string, imagenPath:string, ingredients: Ingredient[]){
        this.name = name;
        this.description = description;
        this.imagenPath = imagenPath;
        this.ingredients = ingredients;
    }
}