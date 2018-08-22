import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'

// store
import { StoreModule } from '../store/module'
import { LoginEpics } from '../store/epics/login.epic';
import { LoginActions } from '../store/actions/login.actions';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/services/token.interceptor';
import { AuthService } from 'src/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

const APP_COMMON_MODULES = [
  BrowserModule,
  FormsModule,
  HttpClientModule,
  StoreModule
]

@NgModule( {
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent
  ],
  imports: [...APP_COMMON_MODULES],
  providers: [
    LoginEpics,
    LoginActions,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [ ProductsComponent, NavbarComponent ]
} )
export class AppModule { }
