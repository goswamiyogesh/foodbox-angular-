import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product} from '../Product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{

  constructor(private service:DataService,public router:Router) {}
 product:Product=new Product();
message:any;
ngOnInit(): void {
}
public addProduct(){
  let response=this.service.addProduct(this.product)
  response.subscribe((data:any)=>this.product=data)
  this.router.navigate(['/admindashboard']);
 }
  }
