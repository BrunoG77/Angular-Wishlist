import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { wishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

import {EventService} from '../shared/services/EventService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent]
})
export class AppComponent {
  // create items array to contain various wish item objects
  items : wishItem[] = [
    new wishItem("Learn Angular"),
    new wishItem("Finish God of War", true),
    new wishItem("Get a job")
  ];

  filter: any;

  // get visibleItems() : wishItem[] {
  //   return this.items.filter(this.filter)
  // };

  constructor(events: EventService) {
    events.listen("removeItem", (item: wishItem) => {
      // Remove wish Item
      let index = this.items.indexOf(item);

      this.items.splice(index, 1)
    })
  }

}
