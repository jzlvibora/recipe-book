import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() linkClicked = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  recipeClicked(){
    this.linkClicked.emit('recipe')
  }

  shopClicked(){
    this.linkClicked.emit('shop')
  }

}
