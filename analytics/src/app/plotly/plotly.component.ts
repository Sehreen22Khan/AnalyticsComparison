import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js-dist-min';

@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css']
})
export class PlotlyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.load();
    this.scatter();
    this.line();
    this.linear();
    this.multiplelines();
    this.bars();
    this.horizontal_bars();
    this.pie();
    this.donut();
    this.sine();
    this.cosine();
  }

  private load(){    
    var xArray = [];
    var yArray = [];
    for(var i=0;i<500000;i++){
      xArray.push(i%5);
      yArray.push(i%10);
    }
    
    // Define Data
    var data = [{
      x:xArray,
      y:yArray,
      mode:"markers"
    }];
    
    // Define Layout
    var layout = {
      xaxis: {range: [0, 10], title: "Square Meters"},
      yaxis: {range: [0, 10], title: "Price in Millions"},  
      title: "Load Test"
    };
    
    // Display using Plotly
    Plotly.newPlot("load", data, layout);
  }

  private bubble(){var trace1 = {
    x: [0, 1, 2, 3, 4, 5, 6],
    y: [1, 9, 4, 7, 5, 2, 4],
    mode: 'markers',
    marker: {
        size: [20, 40, 25, 10, 60, 90, 30],
    }
};

var data = [trace1];

var layout = {
    title: 'Create a Static Chart',
    showlegend: false
};

Plotly.newPlot('myDiv', data, layout, {staticPlot: true});
}

  private scatter(){
    var xArray = [50,60,70,80,90,100,110,120,130,140,150];
    var yArray = [7,8,8,9,9,9,10,11,14,14,15];
    
    // Define Data
    var data = [{
      x:xArray,
      y:yArray,
      mode:"markers"
    }];
    
    // Define Layout
    var layout = {
      xaxis: {range: [40, 160], title: "Square Meters"},
      yaxis: {range: [5, 16], title: "Price in Millions"},  
      title: "House Prices vs. Size"
    };
    
    // Display using Plotly
    Plotly.newPlot("scatter", data, layout);
  }

  private line(){
    var xArray = [50,60,70,80,90,100,110,120,130,140,150];
    var yArray = [7,8,8,9,9,9,10,11,14,14,15];

    // Define Data
    var data = [{
      x: xArray,
      y: yArray,
      mode:"lines"
    }];

    // Define Layout
    var layout = {
      xaxis: {range: [40, 160], title: "Square Meters"},
      yaxis: {range: [5, 16], title: "Price in Millions"},  
      title: "House Prices vs. Size"
    };

    // Display using Plotly
    Plotly.newPlot("line", data, layout);
  }

  private linear(){
    var exp = "x + 17";
    
    // Generate values
    var xValues = [];
    var yValues = [];
    for (var x = 0; x <= 10; x += 1) {
      xValues.push(x);
      yValues.push(eval(exp));
    }
    
    // Define Data
    var data = [{
      x: xValues,
      y: yValues,
      mode:"lines"
    }];
    
    // Define Layout
    var layout = {title: "y = " + exp};
    
    // Display using Plotly
    Plotly.newPlot("linear", data, layout);
  }

  private multiplelines(){
    var exp1 = "x";
    var exp2 = "1.5*x";
    var exp3 = "1.5*x + 7";
    // Generate values
    
    var x1Values = [];
    var x2Values = [];
    var x3Values = [];
    var y1Values = [];
    var y2Values = [];
    var y3Values = [];
    
    for (var x = 0; x <= 10; x += 1) {
      x1Values.push(x);
      x2Values.push(x);
      x3Values.push(x);
      y1Values.push(eval(exp1));
      y2Values.push(eval(exp2));
      y3Values.push(eval(exp3));
    }
    
    // Define Data
    var data = [
      {x: x1Values, y: y1Values, mode:"lines"},
      {x: x2Values, y: y2Values, mode:"lines"},
      {x: x3Values, y: y3Values, mode:"lines"}
    ];
    
    //Define Layout
    var layout = {title: "[y=" + exp1 + "]  [y=" + exp2 + "]  [y=" + exp3 + "]"};
    
    // Display using Plotly
    Plotly.newPlot("multiplelines", data, layout);
  }

  private bars(){
    var xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yArray = [55, 49, 44, 24, 15];

    var data = [{
      x:xArray,
      y:yArray,
      // type: "bar"
    }];

    var layout = {title:"World Wide Wine Production"};

    Plotly.newPlot("bars", data, layout);
  }

  private horizontal_bars(){
    var xArray = [55, 49, 44, 24, 15];
    var yArray = ["Italy ", "France ", "Spain ", "USA ", "Argentina "];
    
    var data = [{
      x:xArray,
      y:yArray,
      // type:"bar",
      // orientation:"h",
      // marker: {color:"rgba(255,0,0,0.6)"}
    }];
    
    var layout = {title:"World Wide Wine Production"};
    
    Plotly.newPlot("hbars", data, layout);
  }

  private pie(){
    var xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yArray = [55, 49, 44, 24, 15];
    
    var layout = {title:"World Wide Wine Production"};
    
    var data = [{labels:xArray, values:yArray,}];//type:"pie"}];
    
    Plotly.newPlot("pie", data, layout);
  }

  private donut(){
    var xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yArray = [55, 49, 44, 24, 15];
    
    var layout = {title:"World Wide Wine Production"};
    
    var data = [{labels:xArray, values:yArray, hole:.4,}]; // type:"pie"}];
    
    Plotly.newPlot("donut", data, layout);
  }

  private sine(){
    var exp = "Math.sin(x)";
    
    // Generate values
    var xValues = [];
    var yValues = [];
    for (var x = 0; x <= 10; x += 0.1) {
      xValues.push(x);
      yValues.push(eval(exp));
    }
    
    // Display using Plotly
    var data = [{x:xValues, y:yValues, mode:"lines"}];
    var layout = {title: "y = " + exp};
    Plotly.newPlot("sin", data, layout);
  }

  private cosine(){
    var exp = "Math.cos(x)";
    
    // Generate values
    var xValues = [];
    var yValues = [];
    for (var x = 0; x <= 10; x += 0.2) {
      yValues.push(eval(exp));
      xValues.push(x);
    }
    
    // Display using Plotly
    var data = [{x:xValues, y:yValues, mode:"markers"}];
    var layout = {title: "y = " + exp};
    Plotly.newPlot("cosin", data, layout);
  }

}
