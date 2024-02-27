import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

 createDb(){
    
  const products =[
    {id:1,productName:'Sabun Mandi',stok:10,hargaProduk:20000,photo:'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//90/MTA-3634190/dettol_sabun-mandi-cair-dettol-original---625-gram_full02.jpg'},
    {id:2,productName:'Indomie',stok:20,hargaProduk:3500,photo:'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-2583228/indomie_indomie-goreng-mie-instan--85g--_full02.jpg'},
    {id:3,productName:'Gula',stok:5,hargaProduk:19500,photo:'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/02/22/Gula-Putih-2534206910.jpg'},
  ]
  return{products} 
  }

  genId(products : Product[]):number{
    return products.length>0? Math.max(...products.map(p=>p.id))+1:11;
  }
}
