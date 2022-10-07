import { Component } from '@angular/core';
import { filter, from, fromEvent, map, tap } from 'rxjs';

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


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///// OBSERVABLE AND RXJS OPERATOR DEMO //////////////////////////////////////
//// operators - used to transform the data emitted by observable 
//// then returns a new observable with the transformed data
//// https://www.youtube.com/watch?v=lReVSh_7bKs
//// https://www.youtube.com/watch?v=bkk54vMovk8
//// https://www.youtube.com/watch?v=FITI5ASi6dQ
///// pipe - use inorder to apply different functions(operators) to observable-just imagine pipe in real life
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
  
array1=[1,3,5,7,8]
array2=['A','B','C','D','E']

  myObservable = from(this.array1);


//Original Scenario -- emits 1 3 5 7 8 
  // ngOnInit(){
  //   this.myObservable.subscribe((val)=>{
  //     console.log(val)
  //   }, (err)=>{
  //     alert(err.message)
  //   },()=>{
  //     alert('Observable has completed emitting all values')
  //   })
  // }

  //Scenario1
  // ngOnInit(){
  //   this.transformedObs.subscribe((val)=>{
  //     console.log(val)
  //   }, (err)=>{
  //     alert(err.message)
  //   },()=>{
  //     alert('Observable has completed emitting all values')
  //   })
  // }

  //Scenario2
  // ngOnInit(){
  //   this.filteredObs.subscribe((val)=>{
  //     console.log(val)
  //   }, (err)=>{
  //     alert(err.message)
  //   },()=>{
  //     alert('Observable has completed emitting all values')
  //   })
  // }


   //Scenario3
  ngOnInit(){
    this.demo1();
    this.transformedObs2.subscribe((val)=>{
      console.log(val)
    }, (err)=>{
      alert(err.message)
    },()=>{
      alert('Observable has completed emitting all values')
    })
  }



  // Scenario1 -- emits 5 15 25 35 40
  // we want to transform the data emitted by the above observable,  multiply each by 5 then return the transformed data
  // map operator return a new observable with the transformed data
  transformedObs=this.myObservable.pipe(map((val:number)=>{
    return val*5;
  }))

  //Scenario2 -- emits 15 25 35 40
  //from transformed data we only want to emit those that  satisfies the condition >=13
 //filter returns a new observable
  filteredObs=this.transformedObs.pipe(filter((val:number)=>{
return val>=13;
}))

//Scenario3 -- combining map and filter 
transformedObs2=this.myObservable.pipe(map((val:number)=>{
  return val*5;
}),filter((val:number)=>{
  return val >=13
}))


demo1():void {fromEvent<MouseEvent>(document, 'click')
.pipe(
  tap(data=>console.log('Before filtering', data)),
  filter(data=>data.clientX>300 && data.clientY>300),
  map(data=>`X:${data.clientX}, Y:${data.clientY}`)
)
.subscribe((data)=>{
  console.log('final', data)
})
}


}


