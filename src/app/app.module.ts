import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceListComponent } from './price-list/price-list.component';
import { OnSalePipe } from './on-sale.pipe';
import { PageNotFroundComponent } from './page-not-fround/page-not-fround.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { DisplayedFoodComponent } from './displayed-food/displayed-food.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    PriceListComponent,
    OnSalePipe,
    PageNotFroundComponent,
    HomeComponent,
    HighlightDirective,
    DisplayedFoodComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    CardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
