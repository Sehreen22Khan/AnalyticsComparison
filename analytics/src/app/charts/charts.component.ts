import { Component, OnInit } from '@angular/core';
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Appointments();
    // // this.load();
    // this.scatter();
    // this.line();
    // this.multiLines();
    // this.linear();
    // this.sine();
    // this.bars();
    // this.pie();
    // this.donut();
    window.onload = function () {
      var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
      console.log('Load Test :: Chart.js :: '+ loadTime);
  }
  }

  private labels_count_arrays(data: any, labels_field: string){
    var labels: any[] = [];
    var counts: any[] = [];
    var item;
    for(var i=0;i<data.length;i++){
      item = data[i][labels_field]
      if(item in labels){
        labels[item] += 1;
      }
      else{
        labels[item] = 1;
      }
    }
    // Access Keys and values as follows:
    // console.log(Object.keys(labels))
    // console.log(Object.values(labels))
    return labels;
  }

  private Appointments(){
    var api_data=[{
      provider_schedule_id: 1,
      provider: 1,
      schedule_start_time: "11/11/2021 12:56",
      schedule_end_time:"11/11/2021 13:56",
      voided: 0,
      visit_id:1,
      visit_type_id:1,
      visit_type: "Testing"
    },
    {
      provider_schedule_id: 2,
      provider: 1,
      schedule_start_time: "11/11/2021 1:56",
      schedule_end_time:"11/11/2021 2:56",
      voided: 0,
      visit_id:2,
      visit_type_id:1,
      visit_type: "Testing"
    },
    {
      provider_schedule_id: 1,
      provider: 1,
      schedule_start_time: "11/11/2021 12:56",
      schedule_end_time:"11/11/2021 13:56",
      voided: 0,
      visit_id:3,
      visit_type_id:1,
      visit_type: "Testing"
    },{
      provider_schedule_id: 1,
      provider: 1,
      schedule_start_time: "11/11/2021 12:56",
      schedule_end_time:"11/11/2021 13:56",
      voided: 0,
      visit_id:1,
      visit_type_id:1,
      visit_type: "Testing"
    },
    {
      provider_schedule_id: 2,
      provider: 1,
      schedule_start_time: "11/11/2021 1:56",
      schedule_end_time:"11/11/2021 2:56",
      voided: 0,
      visit_id:2,
      visit_type_id:2,
      visit_type: "Registration"
    },
    {
      provider_schedule_id: 1,
      provider: 1,
      schedule_start_time: "11/11/2021 12:56",
      schedule_end_time:"11/11/2021 13:56",
      voided: 0,
      visit_id:3,
      visit_type_id:2,
      visit_type: "Registration"
    }
    ]
    const label_count = this.labels_count_arrays(api_data,"visit_type");
    console.log(label_count);
    // const data = {
    //   labels: Object.keys(label_count),
    //   datasets: [{
    //     axis: 'y',
    //     label: 'Appointments by Visit Type',
    //     data: Object.values(label_count),
    //     fill: false,
    //     backgroundColor: [
    //       'rgba(255, 99, 132, 0.2)',
    //       'rgba(255, 159, 64, 0.2)',
    //       'rgba(255, 205, 86, 0.2)',
    //       'rgba(75, 192, 192, 0.2)',
    //       'rgba(54, 162, 235, 0.2)',
    //       'rgba(153, 102, 255, 0.2)',
    //       'rgba(201, 203, 207, 0.2)'
    //     ],
    //     borderColor: [
    //       'rgb(255, 99, 132)',
    //       'rgb(255, 159, 64)',
    //       'rgb(255, 205, 86)',
    //       'rgb(75, 192, 192)',
    //       'rgb(54, 162, 235)',
    //       'rgb(153, 102, 255)',
    //       'rgb(201, 203, 207)'
    //     ],
    //     borderWidth: 1
    //   }]
    // };
    new Chart("appointments", {
      type: "bar",
      data: {
        labels: Object.keys(label_count),
        datasets: [{
          backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
          ],
          data: Object.values(label_count),
        }]
      },
      options: {
        plugins:{
          legend: {display: false},
          title: {
            display: true,
            text: "Appointments by Visit Type"
          }
        }
      }
    });
  }

  private load(){
    var xyValues = [];
    xyValues.push({x:160, y:16});
    for(var i=0;i<1500000;i++){
      xyValues.push({x:i%5, y:i%10});
    }

    new Chart("loadChart", {
      type: "scatter",
      data: {
        datasets: [{
          pointRadius: 4,
          pointBackgroundColor: "rgb(0,0,255)",
          data: xyValues
        }]
      },
      // options: {
      //   legend: {display: false},
      //   scales: {
      //     xAxes: [{ticks: {min: 40, max:160}}],
      //     yAxes: [{ticks: {min: 6, max:16}}],
      //   }
      // }
    });
  }

  private scatter(){
    var xyValues = [
      {x:50, y:7},
      {x:60, y:8},
      {x:70, y:8},
      {x:80, y:9},
      {x:90, y:9},
      {x:100, y:9},
      {x:110, y:10},
      {x:120, y:11},
      {x:130, y:14},
      {x:140, y:14},
      {x:150, y:15}
    ];

    new Chart("scatterChart", {
      type: "scatter",
      data: {
        datasets: [{
          pointRadius: 4,
          pointBackgroundColor: "rgb(0,0,255)",
          data: xyValues
        }]
      },
      options: {
        plugins: {
          legend: {display: false},
        },
        scales: {
          x: {
            suggestedMin: 40,
            suggestedMax: 160
          },
          y: {
            suggestedMin: 6,
            suggestedMax: 16
          }
        }
      }
    });
  }

  private line(){
    var xValues = [50,60,70,80,90,100,110,120,130,140,150];
    var yValues = [7,8,8,9,9,9,10,11,14,14,15];

    new Chart("lineChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          // lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        plugins: {
          legend: {display: false},
        },
        scales: {
          yAxes: {min: 6, max:16},
        }
      }
    });
  }

  private multiLines(){
    var xValues = [100,200,300,400,500,600,700,800,900,1000];

    new Chart("multilineChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
          borderColor: "red",
          fill: false
        }, {
          data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
          borderColor: "green",
          fill: false
        }, {
          data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
          borderColor: "blue",
          fill: false
        }]
      },
      options: {
        plugins:{
          legend: {display: false}
        }
      }
    });
  }

  private linear(){
    var xValues: any[] = [];
    var yValues: any[] = [];
    generateData("x * 2 + 7", 0, 10, 0.5);

    new Chart("linearChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          pointRadius: 1,
          borderColor: "rgba(255,0,0,0.5)",
          data: yValues
        }]
      },
      options: {
        plugins:{
          legend: {display: false},
          title: {
            display: true,
            text: "y = x * 2 + 7",
            font: {weight: 'bold'}
          }
        },
      }
    });

    function generateData(value: string, i1: number, i2: number, step = 1) {
      for (let x = i1; x <= i2; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
      }
    }
  }

  private sine(){
    var xValues: any[] = [];
    var yValues: any[] = [];
    generateData("Math.sin(x)", 0, 10, 0.5);

    new Chart("sinChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          pointRadius: 2,
          borderColor: "rgba(0,0,255,0.5)",
          data: yValues
        }]
      },
      options: {
        plugins:{
          legend: {display: false},
          title: {
            display: true,
            text: "y = x * 2 + 7",
            font: {size: 16}
          }
        }
      }
    });
    function generateData(value: string, i1: number, i2: number, step = 1) {
      for (let x = i1; x <= i2; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
      }
    }
  }

  private bars(){
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = ["red", "green","blue","orange","brown"];

    new Chart("barChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        plugins:{
          legend: {display: false},
          title: {
            display: true,
            text: "World Wine Production 2018"
          }
        }
      }
    });
  }

  private pie(){
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145"
    ];

    new Chart("pieChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "World Wide Wine Production 2018"
          }
        }
      }
    });
  }

  private donut(){
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145"
    ];

    new Chart("donutChart", {
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        plugins:{
          title: {
            display: true,
            text: "World Wide Wine Production 2018"
          }
        }
      }
    });
  }

}
