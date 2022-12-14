import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import * as Chart from 'chart.js';

@Component({
  selector: 'mp-billing-overview',
  templateUrl: './billing-overview.component.html',
  styleUrls: ['./billing-overview.component.scss']
})
export class BillingOverviewComponent implements OnInit {

  public canvas: any;
  public ctx: any;
  public chart: any;

  ngOnInit() {
    let ctx: any = document.getElementById("bar-chart");
    ctx = ctx.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: new Date().getFullYear().toString(),
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
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
              faker.datatype.number({ max: 1000 })],
            fill: false,
            barThickness: 12,
          },
          {
            label: (new Date().getFullYear() - 1).toString(),
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
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
              faker.datatype.number({ max: 1000 })],
            barThickness: 12,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Money over a month",
        },
        tooltips: {
          mode: "index",
          intersect: true,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          display: true,
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: 2,
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: 2,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: 2,
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: 2,
              },
              ticks: {
                beginAtZero: true,
                callback: function (value: any) {
                  if (!(value % 10)) {
                    return value;
                  }
                },
              }
            },
          ],
        },
      },
    });
  }
}
