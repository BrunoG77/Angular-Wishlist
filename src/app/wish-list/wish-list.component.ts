import { Component, Input } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
  standalone: true,
  imports:[WishListItemComponent]
})
export class WishListComponent {

  @Input() items: wishItem[] = []
}
