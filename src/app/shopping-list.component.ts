import { Component, Input } from '@angular/core';

@Component({
  selector: 'shopping-list',
  template: `
    <h1>Shopping List</h1>
    <ul>
      <li (click)="deleteItem(item)" *ngFor="let item of list">
        {{item}}
      </li>
    </ul>
    <input  [(ngModel)]="newItem"  />
    <button (click)="addNewItem()">Add</button>
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

  deleteItem(item)
  {
    this.list = this.list.filter(cur => {
      return cur != item
    })
  }

}
