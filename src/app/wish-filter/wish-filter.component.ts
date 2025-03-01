import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
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
  // Input and Output to create a two way binding for [(filter)]
  @Input() filter: any;

  // If its a two way binding, Output MUST be the input name followed by "Change"
  // Input => filter --- Output => filterChange
  @Output() filterChange = new EventEmitter<any>()

  // To Filter the list
  listFilter : string = "0";

  ngOnInit(): void {
    this.updateFilter(this.listFilter)
  }

  updateFilter(value: string) {
    this.filter = filters[parseInt(value)];
    this.filterChange.emit(this.filter);
  }

}
