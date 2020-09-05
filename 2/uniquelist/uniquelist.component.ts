import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'uniquelist',
  templateUrl: './uniquelist.component.html',
  styleUrls: ['./uniquelist.component.css']
})
export class UniqueListComponent {
  item: string;
  items: string[] = [];

  onSubmit() {
    this.add(this.item);
  }

  addItem() {
    this.add(this.item);
  }

  add(element) {
    if (element) element = element.trim();
    if (element && this.items.indexOf(element) === -1) {
      this.items.push(element);
      this.item = '';
    }
  }

  removeItem(item) {
    if (item) item = item.trim();
    if (item && this.items.indexOf(item) !== -1) {
      this.items = this.items.filter(e => e !== item);
      this.item = '';
    }
  }

  clearItems() {
    this.items = [];
  }
}
