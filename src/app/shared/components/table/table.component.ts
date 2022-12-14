import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { initialSort, TableSortModel } from 'src/app/core/models';

import { ColumnConfig } from './table.model';

@Component({
  selector: 'mp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() sort: TableSortModel = initialSort;
  @Input() isLoading = false;
  @Input() data: Array<any> = [];
  @Input() columnsConfig: Array<ColumnConfig> = [];
  @Input() isSelection = false;
  @Input() editMode = false;
  @Input() subActionName = '';
  @Input() customAction = '';
  @Output() sortChanged = new EventEmitter();
  @Output() clickedRow = new EventEmitter();
  @Output() selectionChange = new EventEmitter();
  @Output() removed = new EventEmitter();
  @Output() openMessage = new EventEmitter();
  @Output() subActionClicked = new EventEmitter();

  public displayedColumns: string[] = [];
  selection = new SelectionModel<any>(true, []);

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['columnsConfig']) {
      this.displayedColumns = Object.values(
        this.columnsConfig.map((column) => column.field)
      );
    }
  }

  sortData(sort: Sort) {
    this.sortChanged.emit({
      ...this.sort,
      sortBy: sort.active,
      sortType: sort.direction,
    });
  }

  onClickedRow(row: string) {
    this.clickedRow.emit(row);
  }

  onRemoved(row: string) {
    this.removed.emit(row);
  }

  onOpenMessage(row: string) {
    this.openMessage.emit(row);
  }

  onSubActionClicked(row: string) {
    this.subActionClicked.emit(row);
  }

  isDateField(name: string) {
    return name.toLowerCase().includes('date');
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.data);
    }

    this.selectionChange.emit(this.selection.selected);
  }

  toggleRow(row: any) {
    this.selection.toggle(row);
    this.selectionChange.emit(this.selection.selected);
  }

  isSelected(id: string) {
    return this.selection.selected.some((item) => item.id === id);
  }

  trackByIndex(index: number) {
    return index;
  }
}
