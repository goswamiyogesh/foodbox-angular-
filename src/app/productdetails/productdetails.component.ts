import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:DataService) { }

  product:Product
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id:",id);
    this.service.getProductById(Number(id)).subscribe(data=>this.product=data);
  }

}
