import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'rd-widget-body',
  properties: ['loading', 'classes'],
    template: require('./rd-widget-body.html'),
  directives: [CORE_DIRECTIVES]
})
export class RdWidgetBody {
  loading:boolean;
  classes:string;

  constructor() {
    this.loading = false;
    this.classes = '';
  }
}
