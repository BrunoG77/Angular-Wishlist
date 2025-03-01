import { Component, Input, Output, EventEmitter } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
  standalone: true,
  imports:[CommonModule]
})
export class WishListItemComponent {
  // Use ! for the non null assertion, because we will always have a wishText
  @Input() wishText! : string;

  @Input() fulfilled! : boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  toggleFulfilled(){
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

  get cssClasses() {
    // return this.fulfilled ? ['strikeout', 'text-muted'] : [];

    // OU
    return {
      'strikeout text-muted': this.fulfilled
    }
  }
}
