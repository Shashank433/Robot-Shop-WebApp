import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product! : IProduct; // Input to receive the product data from the parent component
  @Output() buy = new EventEmitter() // Output event emitter to notify the parent when the buy button is clicked
  

  buyButtonClicked(product:IProduct)
  {
    this.buy.emit(); // Emit the event without passing any data for now

  }

  getImageUrl(product:IProduct)
  {
    if (!product) return '';
    return '/assets/images/robot-parts/'+ product.imageName;
  }


}
