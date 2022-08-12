import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section7-directive',
  templateUrl: './section7-directive.component.html',
  styleUrls: ['./section7-directive.component.css']
})
export class Section7DirectiveComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers=[1,3,5];
  evenNumbers=[2,4]
  onlyOdd = false;
  value=10;
  constructor() { }

  ngOnInit(): void {
  }

}
