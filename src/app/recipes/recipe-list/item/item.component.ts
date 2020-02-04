import { Component, Input} from '@angular/core';
import { Recipe } from '../../recipe.module';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() recipe:Recipe;
   @Input() index: number;
 
}
