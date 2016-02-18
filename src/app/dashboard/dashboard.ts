import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
import {FORM_DIRECTIVES,NgClass,CORE_DIRECTIVES} from 'angular2/common';
// import {HTTP_BINDINGS} from 'http/http';

import {Board} from './directives/dashboard/dashboard';
import {Tables} from './directives/tables/tables';



@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'dashboard',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    ...FORM_DIRECTIVES,
    NgClass,
    ROUTER_DIRECTIVES,CORE_DIRECTIVES
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./dashboard.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./dashboard.html')
})



@RouteConfig([
  {path: '/board', component: Board, as: 'Board'},
  {path: '/tables', component: Tables, as: 'Tables'}
])

export class Dashboard {

  mobileView:number = 992;
  toggle:boolean = false;

  constructor() {
    this.attachEvents();
  }

  attachEvents() {
    window.onresize = ()=> {
      if (this.getWidth() >= this.mobileView) {
        if (localStorage.getItem('toggle')) {
          this.toggle = !localStorage.getItem('toggle') ? false : true;
        } else {
          this.toggle = true;
        }
      } else {
        this.toggle = false;
      }
    }
  }

  getWidth() {
    return window.innerWidth;
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
    localStorage.setItem('toggle', this.toggle.toString());
  }
}