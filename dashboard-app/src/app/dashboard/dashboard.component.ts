import { Component, OnInit, Injectable, Input } from '@angular/core';
import { AppComponent } from '../app.component';

import { NodeServerService } from '../node-server.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

@Injectable()
export class DashboardComponent implements OnInit {

  constructor(public app: AppComponent,private nodeServerService: NodeServerService ) { }

  public appName;
  public appData;

//Handle data from backend to display appStatus

  ngOnInit() {
    this.nodeServerService.sendAppStatus('appStatus');
    this.nodeServerService.appStatus.subscribe(appStatus => {
      this.appData = appStatus;
    })

  }

//Create a color coded score card components for each application according to the returned status in the previous step
  getColor(status){
    switch (status) {
      case 'Critical':
        return 'tomato';
      case 'Major':
        return 'goldenrod';
      case 'OK':
        return 'limegreen';
    }
  }

// Get app name by click
  cardClicked(name){
    this.appName = name;
  }

}
