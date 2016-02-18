import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'rd-widget',
  template: require('./rd-widget.html'),
  directives: [CORE_DIRECTIVES]
})
export class RdWidget {
}
