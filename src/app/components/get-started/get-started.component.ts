import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

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
