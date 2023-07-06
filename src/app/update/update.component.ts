import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  updateform = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    city: new FormControl(''),
    contactNo: new FormControl(''),
    designation: new FormControl('')
  })
  constructor(private productservicce: ProductService,
              private activetedroute: ActivatedRoute){}

  ngOnInit(){
    this.activetedroute.snapshot.params['id']
    this.productservicce.getEditProductServcie(this.activetedroute.snapshot.params['id']).subscribe((data) => {
      console.log(data)
      this.updateform = new FormGroup({
        name : new FormControl(data['name']),
        email: new FormControl(data['email']),
        city: new FormControl(data['city']),
        contactNo: new FormControl(data['contactNo']),
        designation: new FormControl(data['designation'])

      })
    })
  }

  updateFun(){

    this.productservicce.getUpdateProductService(this.activetedroute.snapshot.params['id'],this.updateform.value).subscribe((data) => {
      console.log(data);
      
    })
  }
}
