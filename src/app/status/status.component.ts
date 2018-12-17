import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StatusService } from '../service/status.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  chart = [];

  constructor( private _weather:StatusService ) { }

  ngOnInit() {


    // this._weather.dailyForecast()
    //   .subscribe(res => {
    //  console.log(res);
    //     let temp_max = res['list'].map(rese => rese.temp_max)
    //     let temp_min = res['list'].map(rese => rese.temp_min)
    //     let alldates = res['list'].map(rese => rese.dt)

    //     let weatherDates = []
    //     alldates.forEach((res) => {
    //       let jsdate = new Date(res * 1000)
    //       weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
    //     })

    //     this.chart = new Chart('canvas', {
    //       type: 'line',
    //       data: {
    //         labels: weatherDates,
    //         datasets: [
    //           {
    //             data: temp_max,
    //             borderColor: '#3cba9f',
    //             fill: false
    //           },
    //           {
    //             data: temp_min,
    //             borderColor: '#ffcc00',
    //             fill: false
    //           },
    //         ]
    //       },
    //       options: {
    //         legend: {
    //           display: false
    //         },
    //         scales: {
    //           xAxes: [{
    //             display: true
    //           }],
    //           yAxes: [{
    //             display: true
    //           }]
    //         }
    //       }
    //     })

    //   })




    this._weather.dailyForecast()
.subscribe(res => {
  
  let temp_max = res['list'].map(res => res.main.temp_max)
  let temp_min = res['list'].map(res => res.main.temp_min)
  let alldates = res['list'].map(res => res.dt)

  let weatherDates = []
  alldates.forEach((res) => {
    let jsdate = new Date(res * 1000)
    weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
  })

  this.chart = new Chart('canvas', {
    type: 'line',
    data: {
      labels: weatherDates,
      datasets: [
        {
          data: temp_max,
          borderColor: '#3cba9f',
          fill: false
        },
        {
          data: temp_min,
          borderColor: '#ffcc00',
          fill: false
        },
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }]
      }
    }
  })

})
}




  }



