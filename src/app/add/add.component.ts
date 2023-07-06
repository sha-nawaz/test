import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  alert:boolean= false
  
  myform = new FormGroup({
    name : new FormControl(''),
    email: new FormControl(' '),
    city: new FormControl(' '),
    contactNo: new FormControl(' '),
    designation: new FormControl('')
  })
  constructor(private productservice: ProductService){}

  ngOnInit(){
   
  }

  addFormFun(body:Iproduct){
  
    this.productservice.addProductService(body).subscribe((data) => {
      console.log(data);
      this.alert = true
      this.myform.reset()
    })
  
  }
  closeAlert(){
    this.alert = false
  }
}
