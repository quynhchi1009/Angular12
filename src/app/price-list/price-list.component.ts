import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  public fruits = ['Strawberries', 'Raspberries', 'Blueberries', 'Kiwifruit', 'Passionfruit'];
  public fruitsArray = [
    {name: 'Strawberries', price: 11.99, discount: false},
    {name: 'Raspberries', price: 14.99, discount: true},
    {name: 'Blueberries', price: 12.99, discount: false},
    {name: 'Kiwifruit', price: 14.99, discount: true},
    {name: 'Passionfruit', price: -5, discount: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
