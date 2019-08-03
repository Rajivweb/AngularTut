import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import {IEmployee} from '../employee';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  // INPUT
   @Input() childPrice:number;
   @Input() StringExample:any;


  // OUTPUT
    public myItem = [];
   @Output() dataToParent = new EventEmitter<any[]>();
    // dataOutForParent:string="Hi im from child"

   childMethodTosendData(value){
    //  this.dataToParent.emit(this.myItem);
    // window.alert(this.myItem)
    console.log(value);

   }

  
  constructor(private cartservice:CartService) { }

  ngOnInit() {
     

      this.cartservice.getItems()
      .subscribe(data => {
        this.myItem = data;
         this.dataToParent.emit(this.myItem);
      });
      
  }
}
