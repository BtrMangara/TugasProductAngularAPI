import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  form !: FormGroup;
  submitted = false;
  product !: Product;

  constructor(
    private activateRoute : ActivatedRoute,
    private productService :ProductService,
    private router : Router
  ){
    this.activateRoute.params.subscribe((params)=>{
      this.productService.getProduct((params['id']))
      .subscribe((res: Product)=>{
        this.product = res;
        this.form = new FormGroup({
          produk_id : new FormControl(this.product.id),
          produk_name : new FormControl(this.product.productName),
          produk_stok : new FormControl(this.product.stok),
          produk_price : new FormControl(this.product.hargaProduk),
          produk_photo : new FormControl(this.product.photo),
        })
      })
    })
  }

  get f():any{
    return this.form.controls
  }


  onSubmit(){
    this.submitted = true;
  if (this.form.invalid) {
    return;
  }
 
  const id : number = this.f.produk_id.value;
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
