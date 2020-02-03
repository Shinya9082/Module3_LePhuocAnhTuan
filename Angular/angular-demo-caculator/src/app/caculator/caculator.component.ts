import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  first: number;
  second: number;
  output: number;
  operator = '+';
  onFirstChange(value) {
    this.first = Number(value);
  }
  onSecondChange(value) {
    this.second = Number(value);
  }
  onChangeOperator(value) {
    this.operator = value;
  }
  doCalculator(value) {
    switch (this.operator) {
      case '+':
        this.output =  this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
