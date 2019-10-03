import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-app';
  object = {
    title: 'My app',
    author: 'DBAR'
  }
  btnDisabled = true;
  date = new Date();
  products = [
    { name: 'Product1', price: '111' },
    { name: 'Product2', price: '222' }
  ];

  isBtnDisabled() {
    return (this.btnDisabled);
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  getClasses(): string[] {
    const classes: string[] = new Array();
    classes.push('classCommon');
    if (this.isBtnDisabled()) {
      classes.push('class1');
    } else {
      classes.push('class2');
    }
    return (classes);
  }
}
