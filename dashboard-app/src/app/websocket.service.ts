import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable()
  export class WebsocketService {
  private socket;
  private str;
  constructor() { }

  connect(): Rx.Subject<any> {

    this.socket = io(environment.ws_url);
    let observable = new Observable(observer => {
      this.socket.on('appStatus', (data) => {
        observer.next(data);
      })
      this.socket.on('random', (data) => {
        observer.next(data);
      })
      this.socket.on('cpu', (data) => {
        observer.next(data);
      })
      return () => {
        this.socket.disconnect();
      }
    });
    let observer = {
      next: (data: Object) => {
        console.log(data)
      this.str = data;
        this.socket.emit(data, JSON.stringify(data));
      }

    };
    return Rx.Subject.create(observer, observable);
  }
}
