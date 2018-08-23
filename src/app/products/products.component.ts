import { Component } from '@angular/core';

declare var require;

@Component( {
  selector: 'app-products',
  templateUrl: './products.template.html',
  styleUrls: [ './products.component.scss' ]
} )
export class ProductsComponent {
    img = require('../../assets/prot1.png')
}
