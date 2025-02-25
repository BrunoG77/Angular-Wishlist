import { Component } from '@angular/core';
import { wishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

// To clean up the code
const filters = [
  (item : wishItem) => item,
  (item : wishItem) => !item.isComplete,
  (item : wishItem) => item.isComplete
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule]
})
export class AppComponent {
  // create items array to contain various wish item objects
  items : wishItem[] = [
    new wishItem("Learn Angular"),
    new wishItem("Finish God of War", true),
    new wishItem("Get a job")
  ];
  title = 'AngularTutWishlist';


  addNewWish(newWish : string) {
    if (newWish.trim()){
      this.items.push(new wishItem(newWish.trim()))
    }
  }

  // To Filter the list
  listFilter : any = "0";

  get visibleItems() : wishItem[] {
    return this.items.filter(filters[this.listFilter])
  };

  toggleItem(item : wishItem){
    item.isComplete = !item.isComplete
    console.log(item)
  }
}
