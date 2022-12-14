import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Chart } from 'chart.js';

@Component({
  selector: 'mp-visitor-overview',
  templateUrl: './visitor-overview.component.html',
  styleUrls: ['./visitor-overview.component.scss']
})
export class VisitorOverviewComponent implements OnInit {
  public canvas: any;
  public ctx: any;
  public chart: any;



  ngOnInit() {
    this.canvas = document.getElementById("chartHours");
    this.ctx = this.canvas.getContext("2d");

    this.chart = new Chart(this.ctx, {
      type: 'line',

      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [
            faker.datatype.number({ max: 1000 }),
            faker.datatype.number({ max: 1000 }),
            faker.datatype.number({ max: 1000 }),
            faker.datatype.number({ max: 1000 }),
            faker.datatype.number({ max: 1000 }),
            faker.datatype.number({ max: 1000 }),
            faker.datatype.number({ max: 1000 }),
            faker.datatype.number({ max: 1000 }),
            faker.datatype.number({ max: 1000 }),
            faker.datatype.number({ max: 1000 }),
            faker.datatype.number({ max: 1000 }),
            faker.datatype.number({ max: 1000 })]
        }
        ]
      },
      options: {
        legend: {
          display: false
        },

        tooltips: {
          enabled: true
        },

        scales: {
          yAxes: [{

            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: false,
              maxTicksLimit: 5,
              //padding: 20
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            ticks: {
              padding: 20,
              fontColor: "#9f9f9f"
            },
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent",
              display: false,
            },

          }]
        },
      }
    });

  }
}
