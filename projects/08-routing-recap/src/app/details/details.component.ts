import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  {{productID}}
    <section>
      <p>{{this.productList[this.productID].title}}</p>
      <ul>
        <li>{{this.productList[this.productID].price}}</li>
        <li>{{this.productList[this.productID].description}}</li>
      </ul>
    </section>
  `,
  styles: ``,
})
export class DetailsComponent {
  productList = [
    {
      title: 'Product 1',
      price: 9234,
      description: 'Product 1 is the best',
    },
    {
      title: 'Product 2',
      price: 3043,
      description: 'Product 2 is special',
    },
    {
      title: 'Product 3',
      price: 4355,
      description: 'Product 3 has my heart',
    },
  ];

  productID :number =-1;

  @Input() set id(value:number){
    this.productID = value;
  }
}
