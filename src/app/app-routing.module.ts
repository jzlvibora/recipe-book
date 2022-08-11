import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section7DirectiveComponent } from './section7-directive/section7-directive.component';

const routes: Routes = [
  { path: 'section7', component: Section7DirectiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
