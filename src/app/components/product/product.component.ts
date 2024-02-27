import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products :Product[]=[];

  constructor(private productService:ProductService, private router : Router){
    
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next: (v) =>this.products=v,
      error:(e)=>alert(`${e}`),
      complete:()=> console.info('Complete')
    })
  }

  addProduct(){
    this.router.navigate(['product/addProduct'])
  }

  editProduct(id:number){
    this.router.navigate(['product/editProduct/',id])
  }

  deleteCategory(product:Product){
    this.products.filter(f=>f !== product)
    this.productService.deleteProduct(product).subscribe();
  }

  ngOnInit(): void {
      this.getProducts();
  }
}
