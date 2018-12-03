import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';

import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class NodeServerService {

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  appStatus: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    this.appStatus = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        return response;
      })
  }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendAppStatus(str)  {
   this.appStatus.next(str)
  }

}
