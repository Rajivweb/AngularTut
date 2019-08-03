import { Component, OnInit} from '@angular/core';
import { products } from '../products';
import {IEmployee} from '../employee';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsVar = products;
 public emp =[];
 public erroMsg;
  // count:number = 0;
  // dataToChild:any = this.emp;

  //  updateFromChild(){
  //   this.count++;
  // }

  share() {
    window.alert('The product has been shared!');
  }

 onNotify() {
    window.alert('You will be notified when the product goes on sale'
    );
  }
// OUTPUT
 
 recievedDataFromChild

  eventHandler(event:any[]){
    this.recievedDataFromChild=event;
  }

 


  constructor(
    private cartService: CartService
  ){}

  ngOnInit(){
    this.cartService.getItems()
    .subscribe(data => this.emp = data,
              error => this.erroMsg = error);

  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/