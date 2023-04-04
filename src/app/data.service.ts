import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  AdminUrl:string="http://localhost:8088/api/admin/";
  UserUrl:string="http://localhost:8088/api/user/";
  ProductUrl:string="http://localhost:8088/api/product/";
  CartUrl:string="http://localhost:8088/api/cart/";
  ProductIDforCart:any;

  
  constructor(private http:HttpClient) { }
  //------admin-------
   public adminLogin(username:any){
    return this.http.get(this.AdminUrl+"getAdminByUsername/"+username);
}
//-------user-------
public userLogin(username:any){
    return this.http.get(this.UserUrl+"getUserByUsername/"+username);
  }
  public addUser(user:any){
    return this.http.post(this.UserUrl+"addUser",user)
  }
  public getAllUser(){
    return this.http.get(this.UserUrl+"getAllUser")
  } 
  public getUserByEmail(keyword:any){
    return this.http.get(this.UserUrl+"getAllUserByEmail/"+keyword)
  }

  //------------product----------
  public addProduct(product:any){
    return this.http.post(this.ProductUrl+"addProduct",product)
  }
  public getAllProduct(){
    return this.http.get(this.ProductUrl+"getAllProduct")
  }
  public deleteProduct(id:any){
    return this.http.delete(this.ProductUrl+"productDelete/"+id)
  }

  public editProduct(id:any, product:any){
    return this.http.put(this.ProductUrl+"productUpdate/"+id,product);
  }
  public getProductByFoodname(keyword:any){
    return this.http.get(this.ProductUrl+"getAllProductByFoodname/"+keyword)
  }

  public getProductByCategory(keyword:any){
    return this.http.get(this.ProductUrl+"getAllProductByCategory/"+keyword)
  }
  public getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(this.ProductUrl+"getProductById/"+id);
  }
  //---------cart--------
  public addToCart(cart:any){
    return this.http.post(this.CartUrl+"addToCart",cart)
  }
  public getAllProductsInCart(){
    return this.http.get(this.CartUrl+"getAllProduct")
  }

}
