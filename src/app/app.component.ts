import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'to-do-list-basic';

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { name: "eat", done: true },
    { name: "sleep", done: false },
    { name: "play", done: false },
    { name: "laugh", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(name: string) {
    if (!name) return;
  
    this.allItems.unshift({
      name,
      done: false
    });
  }
}
