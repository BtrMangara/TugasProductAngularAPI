import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './components/product/add-product.component';
import { EditProductComponent } from './components/product/edit-product.component';


const routes: Routes = [
  {path:'',component:FirstPageComponent},
  {path:'product',component:ProductComponent},
  {path:'product/addProduct',component:AddProductComponent},
  {path:'product/editProduct/:id',component:EditProductComponent},
  {path:'**',component:FirstPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
