import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

//Keep two things in mind while routing
//The order of the routes matter, startes from top and goes to bottom
//Use pathmatch while redirecting, especially while doing it from an empty path (prefix or full)
const routes: Routes = [
  {path : 'home' , component : HomeComponent , title : "Home - Reddix-Mart"},
  {path : 'catalog/:filter', component : CatalogComponent, title : "Catalog - Reddix-Mart"},
  {path : 'cart', component : CartComponent, title : "Cart - Reddix-Mart"},
  {path: 'signIn', component: SignInComponent, title : "SignIn - Reddix-Mart"},
  {path : '', redirectTo : '/home', pathMatch : 'prefix'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) // Providing roots for the routes of the application
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
