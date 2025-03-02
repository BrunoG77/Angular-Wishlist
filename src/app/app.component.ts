import { Component, OnInit } from '@angular/core';

import { wishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

import {EventService} from '../shared/services/EventService';

// ng generate service Wish
import { WishService } from './wish.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [WishListComponent, AddWishFormComponent, WishFilterComponent]
})
export class AppComponent implements OnInit {
  // create items array to contain various wish item objects
  items! : wishItem[];

  filter: any;

  // get visibleItems() : wishItem[] {
  //   return this.items.filter(this.filter)
  // };

  constructor(events: EventService, private wishService: WishService) {
    events.listen("removeItem", (item: wishItem) => {
      // Remove wish Item
      let index = this.items.indexOf(item);

      this.items.splice(index, 1)
    })
  }

  ngOnInit(): void {
    // Get method is sent with the .subscribe(http request here)
      this.wishService.getWishes().subscribe((data: any) => {
        this.items = data;
      })
  }

}
