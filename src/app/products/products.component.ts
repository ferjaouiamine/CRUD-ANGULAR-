import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/api/products/product.service';
import { ProductRepresentation } from '../Services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

products:ProductRepresentation[]=[];



  constructor(private service:ProductService) {
  
  }
    ngOnInit(): void {
      
      this.service.getAllProductswithLimit().subscribe({
        next:(result)=>{
this.products=result;
  
        }

});
    }}
