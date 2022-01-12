import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/order/master/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { ShoppingCartComponent } from './Components/order/shopping-cart/shopping-cart.component';
import { DollarToEgpPipe } from './Pipes/dollar-to-egp.pipe';
import { DatePipePipe } from './Pipes/date-pipe.pipe';
import { NationalIDPipe } from './Pipes/national-id.pipe';
import { CreditCardpipePipe } from './Pipes/credit-cardpipe.pipe';
import { SubHeaderComponent } from './Components/order/master/sub-header/sub-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SideMenuComponent,
    ProductCardDirective,
    ShoppingCartComponent,
    DollarToEgpPipe,
    DatePipePipe,
    NationalIDPipe,
    CreditCardpipePipe,
    SubHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
