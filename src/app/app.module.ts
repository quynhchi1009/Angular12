import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceListComponent } from './price-list/price-list.component';
import { OnSalePipe } from './on-sale.pipe';
import { PageNotFroundComponent } from './page-not-fround/page-not-fround.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './Directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    PriceListComponent,
    OnSalePipe,
    PageNotFroundComponent,
    HomeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
