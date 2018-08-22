import { Component } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';
import { Observable } from 'rxjs/internal/Observable';

declare var require;

@Component( {
  selector: 'app-products',
  templateUrl: './products.template.html',
  styleUrls: [ './products.component.scss' ]
} )
export class ProductsComponent {
    img = require('../../assets/prot1.png')
}
