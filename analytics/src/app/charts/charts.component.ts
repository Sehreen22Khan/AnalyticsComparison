import { Component, OnInit } from '@angular/core';
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);
import Chart from 'chart.js/auto';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() {
    var weekdays: any[]= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MONTHS = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const colorPalletes= {
      'greens': ['#92D400', '#3DCC79', '#20A144'],
      'reds': ['#FD554C', '#EB5A52'],
      'blues': ['#0593FF33'],
      'grays': ['#FFFFFF', '#F5F8FA', '#3348540D', '#EAEDF0', '#8697A8', '#303D4Ds'],
      'fresh': ['#9BB7D4', '#1B7340', '#E9897E', '#0072B5', '#FDAC53', '#A0DAA9', '#F19828',
        '#D2386C', '#926AA6', '#B55A30'],
      '2-illuminating-gray': ['#949398FF', '#F4DF4EFF'],
      '2-Coral-pacific': ['#FC766AFF', '#5B84B1FF'],
      '2-uv-dahlia': ['#5F4B8BFF', '#E69A8DFF'],
      '2-turquoise-sand': ['#42EADDFF', '#CDB599FF'],
      '2-blue-orange': ['#00A4CCFF', '#F95700FF'],
      '2-sailorblue-mint': ['#00203FFF', '#ADEFD1FF'],
      '2-gray-lime': ['#606060FF', '#D6ED17FF'],
      '2-tomato-rose': ['#ED2B33FF', '#D85A7FFF'],
      '2-forest-moss': ['#2C5F2D', '#97BC62FF'],
      '2-royalblue-peach': ['#00539CFF', '#EEA47FFF'],
      '2-bluelemonade-aquamarine': ['#0063B2FF', '#9CC3D5FF'],
      '2-black-yellow': ['#101820FF', '#FEE715FF'],
      '2-palegreen-bubblegum': ['#CBCE91FF', '#EA738DFF'],
      '2-coppercoin-agedcopper': ['#B1624EFF', '#5CC8D7FF'],
      '2-mango-moss': ['#DAA03DFF', '#616247FF'],
      '2-green-raspberry': ['#435E55FF', '#D64161FF'],
      

      '4-Vibrant-Pinks':['#963CBDFF', '#FF6F61FF', '#C5299BFF', '#FEAE51FF'],
      '4-blues': ['#2460A7FF', '#85B3D1FF', '#B3C7D6FF', '#D9B48FFF'],
      '4-golds': ['#FFD653FF', '#DDB65DFF', '#EEB238FF', '#6E4C1EFF'],
      '4-greens': ['#0A5E2AFF', '#6DAC4FFF', '#FF4F58FF', '#FE0000FF']
    // Soft Pink (#FFDDE2FF), Peach Amber (#FAA094FF), Yucca (#9ED9CCFF) and Arbor Green (#008C76FF)
    // Purple (#93385FFF), Lilac (#9F6B99FF), Petunia (#4F3466FF) and Aubergine Gleam (#301728FF)
    // Elation (#DFDCE5FF), Light Pink (#F7CED7FF), Pink (#F99FC9FF) and Dark Pink (#EF6079FF)
    // Blue Sky (#ABD1C9FF), Elation (#DFDCE5FF), Nugget (#DBB04AFF) and Celestial (#97B3D0FF)
    // Desert Sand (#DBBEA1FF) Burnished Brown (#A37B73FF) Old Burgundy (#3E282BFF) and Mystic (#D34F73FF)
    // Vermilion (#E3170AFF) Celadon (#A9E5BBFF) Medium Champagne (#FCF6B1FF) and Honey Yellow (#F7B32BFF)
    // Sapphire (#2E5266FF) Light Slate Gray (#6E8898FF) Cadet Gray (#9FB1BCFF) and American Silver (#D3D0CBFF)
    }
    
    // Rose Pink (#DF6589FF) and Purple (#3C1053FF)
    // Royal Purple (#603F83FF) and Ice Flow (#C7D3D4FF)
    // Mellow Yellow (#FFE77AFF) and Verdant Green (#2C5F2DFF)
    // Lemon Tonic (#FCF951FF) and Purple (#422057FF)
    // Teal (#4B878BFF) and Fiery Red (#D01C1FFF)
    // Nebulosity (#1C1C1BFF) and Pink Yarrow (#CE4A7EFF)


    // Blazing Orange (#FFA351FF), Buff Orange (#FFBE7BFF) and Yellow Cream (#EED971FF)
    // Red (#DA291CFF), Norse Blue (#56A8CBFF) and Light Green (#53A567FF)
    // Light Purple (#D7A9E3FF), Light Blue (#8BBEE8FF) and Light Green (#A8D5BAFF)
    // Radiant Yellow (#F9A12EFF), Living Coral (#FC766AFF) and Purple (#9B4A97FF)
    // Warm Gray (#A59C94FF), Crimson (#AE0E36FF) and Raspberry (#D32E5EFF)
    // Living Coral (#FC766AFF), Spiced Apple (#783937FF) and Peach (#F1AC88FF)
    // Lemon Verbena (#F6EA7BFF), Orange Pop (#FFBA52FF) and Aurora Pink (#E683A9FF)
    // Tanager Turquoise (#95DBE5FF), Teal Blue (#078282FF) and Kelly Green (#339E66FF)
    // Knockout Pink (#FF3EA5FF), Safety Yellow (#EDFF00FF) and Out of the Blue (#00A4CCFF)

    // Bright Violet (#963CBDFF), Living Coral (#FF6F61FF), Vibrant Pink (#C5299BFF) and Marigold (#FEAE51FF)
    // Deep Blue (#2460A7FF), Northern Sky (#85B3D1FF), Baby Blue (#B3C7D6FF) and Coffee (#D9B48FFF)
    // Habañero Gold (#FFD653FF), Dijon (#DDB65DFF), Honey (#EEB238FF) and Chestnut (#6E4C1EFF)
    // Dark Green (#0A5E2AFF), Light Green (#6DAC4FFF), Fiery Coral (#FF4F58FF) and Red (#FE0000FF)
    // Soft Pink (#FFDDE2FF), Peach Amber (#FAA094FF), Yucca (#9ED9CCFF) and Arbor Green (#008C76FF)
    // Purple (#93385FFF), Lilac (#9F6B99FF), Petunia (#4F3466FF) and Aubergine Gleam (#301728FF)
    // Elation (#DFDCE5FF), Light Pink (#F7CED7FF), Pink (#F99FC9FF) and Dark Pink (#EF6079FF)
    // Blue Sky (#ABD1C9FF), Elation (#DFDCE5FF), Nugget (#DBB04AFF) and Celestial (#97B3D0FF)
    // Desert Sand (#DBBEA1FF) Burnished Brown (#A37B73FF) Old Burgundy (#3E282BFF) and Mystic (#D34F73FF)
    // Vermilion (#E3170AFF) Celadon (#A9E5BBFF) Medium Champagne (#FCF6B1FF) and Honey Yellow (#F7B32BFF)
    // Sapphire (#2E5266FF) Light Slate Gray (#6E8898FF) Cadet Gray (#9FB1BCFF) and American Silver (#D3D0CBFF)
    
   }

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

  public captureScreen()  
  {  
    console.log("fn called!")
    var data = document.getElementById('pdf')!;
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png');
      // let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      const pdf = new jsPDF();
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  } 

  private labels_count_arrays(data: any, labels_field: string){
    var labels: any[] = [];
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
    const y_prefix = '$';
    const y_suffix = 'min';
    const x_title = 'Visit Types';
    const y_title = 'Count';
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
        scales: {
          y: {
            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                    return y_prefix + ' ' + value + ' ' + y_suffix;
                }
            },
            title: {
              display: true,
              text: y_title
            },
            grid: {
                display: false
            }
          },
          x: {
            title: {
              display: true,
              text: x_title
            },
            grid: {
                display: false
            }
          }
        },
        plugins:{
          legend: {display: false},
          title: {
            display: true,
            text: "Appointments by Visit Type"
          },
          tooltip: {
            enabled: true,
            position: 'average',
            
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
