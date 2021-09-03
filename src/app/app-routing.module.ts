import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFroundComponent } from './page-not-fround/page-not-fround.component';
import { PriceListComponent } from './price-list/price-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pricelist', component: PriceListComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
  { path: '**', component: PageNotFroundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
