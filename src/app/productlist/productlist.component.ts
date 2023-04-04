import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../Product';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{

  foodname:any;
  category:any;
  constructor(private router:Router, private service:DataService) { }
  products:Product[];

  public getAllProductByFoodname(){
    let response=this.service.getProductByFoodname(this.foodname);
    response.subscribe((data:any)=>this.products=data);
  }
  public getAllProductByCategory(){
    let response=this.service.getProductByCategory(this.category);
    response.subscribe((data:any)=>this.products=data);
  }
  


  ngOnInit(): void {
   let response= this.service.getAllProduct();
   response.subscribe((data:any)=>this.products=data);
  }
  DeleteProductById(id:number){
    //refresh the list once product is deleted
    this.products=this.products.filter(c=>c.id!=id);
    //delete product
    this.service.deleteProduct(id);
    console.log("product Deleted");
  }
}
