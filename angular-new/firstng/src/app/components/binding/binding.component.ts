import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/model/Item';



@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent  implements OnInit,OnChanges,OnDestroy{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('from....ngOnChanges');
    //throw new Error('Method not implemented.');
  }
ngOnDestroy(): void {
  console.log('from....ngOnDestroy');
  //throw new Error('Method not implemented.');
}

ngOnInit(): void {
  console.log('from....ngOnInit');
 // throw new Error('Method not implemented.');
}
productId:number=127676;
description = "Apple Mac Book - Retina eye";
qty:number = 100;
price:number = 1800000.00
available:string = 'green';
notavailable:string='red';
delivery:string='red';
orderedQty:number = 0;
isMember =false;
isQtyAvailable=this.qty>0;
items : Item[]=[

new Item(1,'iphone 14','smart phone',78000,10),
new Item(2,'Samsung Galaxy','Smart mobile',5000,20),
new Item(3,'OnePlus+11','adv smart phone',200000,7)

];


takeOrder(): void{
  console.log('order placed......'+this.orderedQty);
//   <div *ngIf="orderedQty>100"></div>
// <this.available</ng-template>
// <ng-template #elseBlock>this.delivery</ng-template>

}
products = [
  {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
  {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
  {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
  {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];



}