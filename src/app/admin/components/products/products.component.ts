// import { Component, OnInit } from '@angular/core';
// import { BaseComponent, SpinnerType } from '../../../base/base.component';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { HttpClientService } from '../../../services/common/http-client.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.scss'
// })
// export class ProductsComponent extends BaseComponent implements OnInit {

//   constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
//     super(spinner)
//   }
//   ngOnInit(): void {

//     this.showSpinner(SpinnerType.BallAtom);
//     this.httpClientService.get({
//       controller: "products"
//     }).subscribe(data=>console.log(data));

//     this.httpClientService.post({
//       controller:"products"
//     },{
//       name:"Kalem",
//       stock:100,
//       price:15
//     }).subscribe();

//     this.httpClientService.post({
//       controller:"products"
//     },{
//       name:"Kalem",
//       stock:100,
//       price:15
//     }).subscribe();

//     this.httpClientService.post({
//       controller:"products"
//     },{
//       name:"Kağıt",
//       stock:1020,
//       price:151
//     }).subscribe();

//     this.httpClientService.post({
//       controller:"products"
//     },{
//       name:"silgi",
//       stock:1030,
//       price:153 
//     }).subscribe();

//     this.httpClientService.post({
//       controller:"products"
//     },{
//       name:"defter",
//       stock:11200,
//       price:15
//     }).subscribe();
//   }
// }


import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  products: any[] = [];

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.loadProducts();
  }

  loadProducts(): void {
    console.log("API çağrısı yapılıyor...");
    this.httpClientService.get<any[]>({
      controller: "products"
    }).subscribe(
      data => {
        console.log("Ürünler alındı:", data);
        this.products = data;
        this.hideSpinner(SpinnerType.BallAtom);
      },
      error => {
        console.error("Ürünleri alırken hata oluştu:", error);
        this.hideSpinner(SpinnerType.BallAtom);
      }
    );
  }

  addProduct(name: string, stock: number, price: number): void {
    console.log(`Ürün ekleniyor: ${name}`);
    this.httpClientService.post({
      controller: "products"
    }, {
      name: name,
      stock: stock,
      price: price
    }).subscribe(
      () => {
        console.log(`${name} eklendi`);
        this.loadProducts(); // Yeni ürün eklendikten sonra ürünleri yeniden yükle
      },
      error => console.error(`${name} eklenirken hata oluştu:`, error)
    );
  }
}


