import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator(['hotmail.com', 'yahoo.com'])

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone: true
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  submitForm() {
    console.log(this.contactForm.valid)

  //   if (this.senderNameControl.dirty) {
  //     alert("You changed the name field")
  //   }
  }
}
