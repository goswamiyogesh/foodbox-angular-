import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usercheckout',
  templateUrl: './usercheckout.component.html',
  styleUrls: ['./usercheckout.component.css']
})
export class UsercheckoutComponent {
  constructor(private service: DataService,private router: Router) {}

  carts:any;
  ngOnInit(): void {
    let response=this.service.getAllProductsInCart()
    response.subscribe((data:any)=>this.carts=data)
  }

}
