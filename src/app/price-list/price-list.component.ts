import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  public fruits: string[] = ['Types of fruit'];
  public fruitsArray = [
    {name: 'Strawberries', price: 11.99, discount: false},
    {name: 'Raspberries', price: 14.99, discount: true},
    {name: 'Blueberries', price: 12.99, discount: false},
    {name: 'Kiwifruit', price: 14.99, discount: true},
    {name: 'Passionfruit', price: -5, discount: false}
  ];
  public fruitTypes = [
    {name: 'Name of Fruit', fruits: ['Types of fruit']},
    {name: 'Apples & pears', fruits: []},
    {name: 'Citrus', fruits: ['oranges', 'grapefruits', 'mandarins', 'limes']},
    {name: 'Stone fruit', fruits: ['nectarines', 'apricots', 'peaches', 'plums']},
    {name: 'Tropical & exotic', fruits: ['bananas', 'mangoes']},
    {name: 'Berries', fruits: ['Strawberries', 'Raspberries', 'Blueberries', 'Kiwifruit', 'Passionfruit']},
    {name: 'Melons', fruits: ['watermelons', 'rockmelons', 'honeydew melons']},
    {name: 'Tomatoes & avocados', fruits: []},
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.fruitTypes)
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
