import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterModule,
    CommonModule
  ],
  standalone: true
})

export class AppComponent {
  
  constructor(private router: Router) {}

  goToContact() {
    // easier to put links together. If array was ["contact", "write"] -> /contact/write 
    this.router.navigate(['contact'])
  }
}
