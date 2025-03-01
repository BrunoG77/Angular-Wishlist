import { Component, Input } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
  standalone: true
})
export class WishListComponent {

  @Input() items: wishItem[] = []

  toggleItem(item : wishItem){
    item.isComplete = !item.isComplete
    console.log(item)
  }
}
