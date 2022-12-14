import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnConfig } from '../../table/table.model';

@Component({
  selector: 'mp-skeleton-loading-table',
  templateUrl: './skeleton-loading-table.component.html',
  styleUrls: ['./skeleton-loading-table.component.scss'],
})
export class SkeletonLoadingTableComponent implements OnInit {
  @Input() columns: Array<ColumnConfig> = [];
  @Input() totalNumberOfRows = 10;
  @Input() isSelection?: boolean = false;
  dataSource: any;
  columnDisplay: Array<string> = [];

  constructor() {
    // do nothing.
  }

  ngOnInit(): void {
    this.columnDisplay = this.columns.map((col) => col.field);
    const data = new Array(this.totalNumberOfRows).fill(0);
    this.dataSource = new MatTableDataSource(data);
  }
}
