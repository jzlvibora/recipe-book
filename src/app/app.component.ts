import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'recipe-angular';
activeLink='recipe';
//  recipeLink=true;
//  shopLink=false;

  onLinkClicked(link:string){
    this.activeLink=link;
    // if(link='recipe'){
    //   this.recipeLink=true;
    //   this.shopLink=false;
    // }
    // if(link='shop'){
    //   this.recipeLink=!this.recipeLink;
    //   this.shopLink=!this.shopLink;
    // }
  }
}


