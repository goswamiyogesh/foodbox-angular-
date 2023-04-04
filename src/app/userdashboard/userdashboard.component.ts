import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Cart } from '../Cart';
import { Product } from '../Product';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit{
  Products:any;
  message:any;
  constructor( private service:DataService,private router:Router){}
  ngOnInit(): void {}
  goToCart(){
    this.router.navigate(['./usercart']);
  }
  getAllProduct(){
    let response=this.service.getAllProduct();
    response.subscribe((data:any)=>this.Products=data);
  }
  
  addProductToCart(id:any){
  this.service.ProductIDforCart=id;
  
    this.router.navigate(['./useraddtocart']);
  }

  userLogout(){
    this.router.navigate(['/userlogin']);
  }
}

