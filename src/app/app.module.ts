import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BaseComponent } from './base/base.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule, UiModule,
    ToastrModule.forRoot({
      timeOut: 3000, // 3 saniye
      positionClass: 'toastr-top-right',
      preventDuplicates: true,
    }),
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [
    //provideClientHydration(),//GPT
    //provideAnimationsAsync(),//GPT
    //provideHttpClient(withFetch()), // Fetch API'yi etkinleştirmek için ekliyoruz
    { provide: "baseUrl", useValue: "https://localhost:7199/api", multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
