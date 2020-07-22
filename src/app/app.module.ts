import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductNamePipe } from './product-name.pipe';
import { ProductPipe } from './product.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RatingComponent } from './rating/rating.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductlistComponent,
    ProductNamePipe,
    ProductPipe,
    RatingComponent,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
