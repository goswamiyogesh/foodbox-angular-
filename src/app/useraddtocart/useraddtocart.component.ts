import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { Product } from '../Product';
import { DataService } from '../data.service';
@Component({
  selector: 'app-useraddtocart',
  templateUrl: './useraddtocart.component.html',
  styleUrls: ['./useraddtocart.component.css']
})
export class UseraddtocartComponent implements OnInit{
  constructor(private service: DataService,private router: Router) {}

  cart:Cart=new Cart();
  carts:any;
  product:Product=new Product();


    ngOnInit(): void {

      let id=this.service.ProductIDforCart

      let resp1=this.service.getProductById(id)
      resp1.subscribe((data:any)=>this.product=data)

    }
  
    addMore(){
      this.router.navigate(['/userdashboard']);
    }

    proceed(){
      this.router.navigate(['/usercheckout']);
    }
    
}
