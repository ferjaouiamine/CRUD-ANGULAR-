import { Component, Input } from '@angular/core';
import { ProductRepresentation } from '../Services/api/models/product-representation';
import { RaitingRrepresentaion } from '../Services/api/models/raiting-representation';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent {
@Input()
product :ProductRepresentation={}
@Input()
raiting :RaitingRrepresentaion={}

}
