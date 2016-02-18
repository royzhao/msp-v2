import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {RdLoading} from '../rd-loading/rd-loading';
import {RdWidget} from '../rd-widget/rd-widget';

import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from '../rd-widget-footer/rd-widget-footer';

import {ServerListView} from '../server-list-view/server-list-view';
import {ServerListService} from '../../services/server_list';


@Component({
  selector: 'tables',
  providers: [ServerListService],
  template: require('./tables.html'),
  directives: [CORE_DIRECTIVES, RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading,ServerListView]
})
export class Tables {
  servers:any[];
  serverListService:ServerListService;

  constructor(serverListService:ServerListService) {
    this.serverListService = serverListService;
    this.servers = this.serverListService.all();
  }
}
