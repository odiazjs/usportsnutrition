import { Component } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';
import { Observable } from 'rxjs/internal/Observable';

@Component( {
  selector: 'app-products',
  templateUrl: './products.template.html',
  styleUrls: [ './products.component.scss' ]
} )
export class ProductsComponent {
    title = 'product list!'
}
