import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  form :FormGroup;
 submitted = false;

 constructor(
  private formBuilder : FormBuilder,
  private productService : ProductService,
  private router : Router
 ){
    this.form = this.formBuilder.group({
      produk_name :['',Validators.required],
      produk_stok :['',Validators.required],
      produk_price :['',Validators.required],
      produk_photo :['',Validators.required],
    })
 }

  get f():any{return this.form.controls}

  onSubmit():void{
    this.submitted= true;

    if(this.form.invalid){
      return;
    }

    const productName:string = this.f.produk_name.value;
    const stok:number = this.f.produk_stok.value;
    const hargaProduk:number = this.f.produk_price.value;
    const photo:string = this.f.produk_photo.value;

    this.productService.addProduct({productName,stok,hargaProduk,photo} as Product)
    .subscribe(()=>this.router.navigate(['product']))
  }

  ngOnInit(): void {
      
  }
}
