import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titles = ['first-app', 'dsadsa'];

  public addItem(newItem: string){
    this.titles.push(newItem);
  }
}
