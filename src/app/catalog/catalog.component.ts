import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
   products : any;
   filter : string = '';
   //We can dependency inject the service into the component using the inject function like below
   // private cartSvc : CartService = inject(CartService)

   
   constructor(
               private cartSvc : CartService,
               private productSvc : ProductService,
               private Router : Router, //we can also do constructor injection the service in a component through a constructor
               private route : ActivatedRoute
   )
   {
     
   }

   ngOnInit()
   {
    this.productSvc.getproducts().subscribe((products) =>
      {
        this.products = products;
      }
    );
    this.route.params.subscribe((params) =>//Understand when would we use a snapshot instaed of subscribe here.
    {
      this.filter = params['filter'] ?? ''; // if the filter is empty then consider it as ''
    }  
    )
    //this.filter = this.route.snapshot.params['filter'];
   }

   addToCart(product:IProduct)
   {
    this.cartSvc.add(product);
    //Now if we want the application to directly move to the cart once u buy any product
    //To implement this below code, we have to inject the router inside the catalong component consructor
    this.Router.navigate(['/cart']);
   }

   getDiscountedProducts(product:IProduct)
   {
    return {strikethrough : product.discount> 0};
   }
   getImageUrl(product:IProduct)
    {
      return '/assets/images/robot-parts/'+ product.imageName;
    }

    getFilteredProducts()
    {
      return this.filter === ''
      ? this.products
      :this.products.filter((product: any) => product.category === this.filter);
    }

    

}
