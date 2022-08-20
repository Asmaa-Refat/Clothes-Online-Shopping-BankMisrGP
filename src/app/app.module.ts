import { ViewItemService } from './shared/services/viewOneItem/view-item.service';
import { LogoutService } from './shared/services/logout/logout.service';
import { SignupService } from './shared/services/signup/signup.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './shared/services/login/login.service';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddToCartService } from './shared/services/addToCart/add-to-cart.service';
import { AuthGuard } from './shared/services/guard/auth-guard';

@NgModule({
  declarations: [
    //components / directives / pipes
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    AboutUsComponent,
  ],
  imports: [
    //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    //services
    LoginService,
    LogoutService,
    SignupService,
    ViewItemService,
    AddToCartService,
    AuthGuard,
  ], 
  bootstrap: [AppComponent],
})
export class AppModule {}
