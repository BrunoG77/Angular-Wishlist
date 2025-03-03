import { Routes } from '@angular/router';
import { WishListPageComponent } from './wish-list-page/wish-list-page.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: WishListPageComponent },
    { path: 'contact', component: ContactComponent },
];
