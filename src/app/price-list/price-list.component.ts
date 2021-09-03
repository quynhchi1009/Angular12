import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  public fruits: string[] = ['Types of fruit'];
  public amount = 9;
  public sum = 0;
  public fruitsArray = [
    {name: 'Strawberries', price: 11.99, discount: false, amount: 15, sum: 0},
    {name: 'Raspberries', price: 14.99, discount: true, amount: 30, sum: 0},
    {name: 'Blueberries', price: 12.99, discount: false,  amount: 20, sum: 0},
    {name: 'Kiwifruit', price: 14.99, discount: true, amount: 15, sum: 0},
    {name: 'Passionfruit', price: -5, discount: false,  amount: 45}
  ];
  public fruitTypes = [
    { 
      name: 'Name of Fruit', 
      fruits: ['Types of fruit']},
    {
      name: 'Apples & pears', 
      fruits: []},
    {
      name: 'Citrus', 
      fruits: ['oranges', 'grapefruits', 'mandarins', 'limes']},
    {
      name: 'Stone fruit', 
      fruits: ['nectarines', 'apricots', 'peaches', 'plums']},
    {
      name: 'Tropical & exotic', 
      fruits: ['bananas', 'mangoes']},
    {
      name: 'Berries', 
      fruits: ['Strawberries', 'Raspberries', 'Blueberries', 'Kiwifruit', 'Passionfruit']},
    {
      name: 'Melons', 
      fruits: ['watermelons', 'rockmelons', 'honeydew melons']},
    {
      name: 'Tomatoes & avocados', 
      fruits: []},
  ];

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.sum = this.common.calculate(this.amount);
    for (let index = 0; index < this.fruitsArray.length; index++) {
      var x = this.fruitsArray[index].amount;
      this.fruitsArray[index].amount = this.common.calculate(x);
      this.fruitsArray[index].sum = x * this.fruitsArray[index].price;
    }
  }

  public chooseType(event : any): void {
    const choseName = event.target.value;
    if (!choseName) {
      return ;
    }

    // Cach1
    // const searchedName = this.fruitTypes.filter(data =>  data.name === choseName)
    // console.log(searchedName);
    // if (searchedName && searchedName.length > 0) {
    //   this.fruits = searchedName[0].fruits;
    // }

    //Cach2
    this.fruits = this.fruitTypes.find(data => data.name == choseName)?.fruits || [];
  }

}
