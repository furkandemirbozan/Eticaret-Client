// import { Component } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
// import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
// declare var $: any;
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'ETicaretClient';
//   constructor(){}
// }

//$.get("https://localhost:7199/api/products")

import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ETicaretClient';

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private toastr: ToastrService,
    private customToastr: CustomToastrService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      

      $.get("https://localhost:7199/api/products", (data) => {
        console.log(data);
      });
    }
  }
  
}
