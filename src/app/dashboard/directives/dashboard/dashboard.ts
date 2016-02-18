import {Component, View} from 'angular2/core';

import {Alerts} from '../alerts/alerts';


import {RdLoading} from '../rd-loading/rd-loading';
import {RdWidget} from '../rd-widget/rd-widget';

import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from '../rd-widget-footer/rd-widget-footer';

import {ServerListView} from '../server-list-view/server-list-view';
import {ServerListService} from '../../services/server_list';

import {UserListView} from '../user-list-view/user-list-view';
import {UserListService} from '../../services/user_list';


@Component({
  selector: 'dashboard',
  providers: [ServerListService,UserListService],
  template: require('./dashboard.html'),
  styles: [require('./dashboard.css')],
  directives: [Alerts, RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading, ServerListView, UserListView]
})

export class Board {

  servers:any[];
  users:any[];

  serverListService:ServerListService;
  userListService:UserListService;

  constructor(serverListService:ServerListService,userListService:UserListService) {
    this.serverListService = serverListService;
    /*TODO: Inject*/
    this.servers = this.serverListService.all();

    this.userListService = userListService;
    /*TODO: Inject*/
    this.users = this.userListService.all();
  }
}
