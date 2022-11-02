import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)= "acumular(false)">-{{base}}</button>
    <span> {{count}} </span>
    <button (click)= "acumular()">+{{base}}</button>
  `,
})
export class ContadorComponent {
  title: string = 'Contador';
  count: number = 0;
  base: number = 5;

  acumular(positive = true) {
    this.count += positive ? this.base : (this.base * -1);
  }
}
