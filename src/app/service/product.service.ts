import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclint: HttpClient) { }

 baseUrl= "http://localhost:3000/productlist"
 
 getProductLitservice():Observable <Iproduct[]>{
  
return this.httpclint.get<Iproduct[]>(this.baseUrl)
  }

  addProductService(body:Iproduct){

    return this.httpclint.post(this.baseUrl,body)
  }

  deleteProductService(id:Iproduct){
    return this.httpclint.delete(`${this.baseUrl}/${id}`)
  }
  getEditProductServcie(id:Iproduct){
    return this.httpclint.get(`${this.baseUrl}/${id}`)
  }

  getUpdateProductService(id, body){

    return this.httpclint.put(`${this.baseUrl}/${id}`,body)
  }
  
}
