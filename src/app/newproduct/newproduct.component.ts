import { Component } from '@angular/core';
import { ProductRepresentation } from '../Services/api/models/product-representation';
import { ProductService } from '../Services/api/products/product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrl: './newproduct.component.scss'
})
export class NewproductComponent {
product: ProductRepresentation={};
  router: any;
constructor(private service:ProductService)
{

}
saveProduct() {
  this.service.createProduct(this.product)
  .subscribe({
    next:(result:ProductRepresentation):void =>{this.router.navigate(['products'])

  }})
throw new Error('Method not implemented.');
}

}
