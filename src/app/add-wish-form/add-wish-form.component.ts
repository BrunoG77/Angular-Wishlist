import { Component, Output, EventEmitter } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';


@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css',
  standalone: true
})
export class AddWishFormComponent {

  @Output() addWish = new EventEmitter<wishItem>()

  addNewWish(newWish : string) {
    if (newWish.trim()){
      //this.items.push(new wishItem(newWish.trim()))
      this.addWish.emit(new wishItem(newWish.trim()))
    }
  }

}
