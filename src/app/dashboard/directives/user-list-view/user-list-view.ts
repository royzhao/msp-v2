import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'user-list-view',
  properties: ['model'],
  template: require('./user-list-view.html'),
  directives: [CORE_DIRECTIVES]
})
export class UserListView {

  model:any[];

  constructor() {
    this.model = [];
  }
}
