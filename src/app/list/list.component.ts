import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

 productList:Iproduct[] = []

  constructor(private productservice: ProductService){}


ngOnInit(){
this.getProduct()
}

getProduct(){
  this.productservice.getProductLitservice().subscribe((data) => {
    console.log(data); 
    this.productList = data
  })
}
dleteFun(id:any){

  this.productservice.deleteProductService(id).subscribe((data) => {
    console.log(data);
    this.productList.slice(this.productList.findIndex(x => x.id == id),id)
  })
}
}
