import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { WebsocketService } from './websocket.service';
import { NodeServerService } from './node-server.service';

@NgModule({

  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [AppComponent, DashboardComponent,WebsocketService,NodeServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
