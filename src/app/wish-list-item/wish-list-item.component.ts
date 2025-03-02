import { Component, Input, Output, EventEmitter } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';

import {EventService} from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
  standalone: true,
  imports:[CommonModule]
})
export class WishListItemComponent {
  // Use ! for the non null assertion, because we will always have a wishText
  @Input() wish!: wishItem;

  toggleFulfilled(){
    this.wish.isComplete = !this.wish.isComplete;
  }

  get cssClasses() {
    // return this.fulfilled ? ['strikeout', 'text-muted'] : [];

    // OU
    return {
      'strikeout text-muted': this.wish.isComplete
    }
  }

  constructor(private events: EventService) {}

  removeItem() {
    this.events.emit("removeItem", this.wish)
  }
}
