import { Component, Input } from '@angular/core';

@Component({
  selector: 'shopping-list',
  template: `
    <h1>Shopping List</h1>
    <ul>
      <li (click)="selectItem(item)" *ngFor="let item of list">
        {{item}}
      </li>
    </ul>
    <input  [(ngModel)]="newItem"  />
    <button (click)="addNewItem()">Add</button>
    <button (click)="deleteItem()">delete</button>

  `,
  styles: [``]
})
export class ShoppingListComponent  {
  list = [
    'Milk',
    'Eggs'
  ]

  newItem = ''

  addNewItem()
  {
    this.list.push(this.newItem);
    this.newItem = '';
  }

  deleteItem(itm)
  {
    itm = this.newItem;
    this.list = this.list.filter(cur => {
      return cur != itm
    })
    this.newItem = '';
  }

  selectItem(item)
  {
    this.newItem = item;
  }

}
