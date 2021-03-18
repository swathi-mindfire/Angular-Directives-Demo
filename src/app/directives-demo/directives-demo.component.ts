import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent  {


items="Cart Items"

  newItem = "";

  itemList = ["Bag","Phone","Dress","Laptop","pens"];
  addItem(){
    this.itemList.push(this.newItem)
  }
  deleteItem(index:number){

    this.itemList.splice(index,1)
  }
  x = true;
  y = false;

}
