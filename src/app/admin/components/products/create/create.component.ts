import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {
  constructor(spiner: NgxSpinnerService, private productService: ProductService, private alertify: AlertifyService) {
    super(spiner)
  }
  ngOnInit(): void {

  }
  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerType.BallAtom);
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);
    if (!name.value.length) {
      this.alertify.message("Lütfen Üeün adını giriniz ! ", {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      });
      return
    }
    if (parseInt(stock.value)<0) {
      this.alertify.message("Lütfen stok Bilgisini  giriniz ! ", {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      });
    }



    this.productService.create(create_product, () => {
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertify.message("Ürün Başarı ile Eklnemiştir", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });
    }, (erroMessage: any) => {
      this.alertify.message(erroMessage,
        {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: Position.TopRight

        });
    });
  }
}
