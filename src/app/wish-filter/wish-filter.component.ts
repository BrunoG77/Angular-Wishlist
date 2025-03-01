import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

// To clean up the code with global variable
const filters = [
  (item : wishItem) => item,
  (item : wishItem) => !item.isComplete,
  (item : wishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
  standalone: true
})

export class WishFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<any>()

  // To Filter the list
  listFilter : string = "0";

  ngOnInit(): void {
    this.changeFilter(this.listFilter)
  }

  changeFilter(value: string) {
    this.filter.emit(filters[parseInt(value)]);
  }

}
