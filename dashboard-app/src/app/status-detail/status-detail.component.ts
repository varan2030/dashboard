import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import * as socketIo from 'socket.io-client';
import * as CanvasJS from '../../canvasjs.min';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NodeServerService } from '../node-server.service';


@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.css']
})
export class StatusDetailComponent implements OnInit {

  

  constructor(
    public app: AppComponent,
    private nodeServerService: NodeServerService,
    private route: ActivatedRoute,
    public location: Location) {}

    timer:number;
    hours:number= 0;
    minutes:number = 0;
    seconds:number = 0;
    
  ngOnInit() {

    this.createChart();

    }

  createChart(){
    let dataPoints = [];
    let dpsLength = 0;
    let chart = new CanvasJS.Chart("chartContainer",{
      animationEnabled: true,
      zoomEnabled: true,
      backgroundColor: "#062743",
     
      title:{
        text:"Memory CPU",
        fontColor: 'white',
        fontSize: 10
      },

      axisX:{
        tickColor: "white",
        titleFontColor: "white",
        labelFontColor: "white"
      },
      axisY:{
        tickColor: "white" ,
        titleFontColor: "white",
        labelFontColor: "white"
      },
      data: [{
        type: "line",
        lineColor: "red",
        dataPoints : dataPoints,
      }]
    });


    this.nodeServerService.sendAppStatus('random');
    this.nodeServerService.appStatus.subscribe(random => {
       this.timer = random.timer;
   
      dataPoints.push({
        y: random.random,
        x: dpsLength
      });
      this.seconds++;
      dpsLength++;
      if (dataPoints.length >  100 ) {
        dataPoints.shift();
      }
      chart.render();
    
      if (this.seconds > 59){
        this.minutes++;
          this.seconds = 0;
          if (this.seconds < 10){
            this.seconds =  + this.seconds
          }
       }else if(this.minutes > 59){
        this.hours++;
         this.minutes = 0;
       } 

    })}

    

  goBack(): void {
    this.location.back();
  }
}
