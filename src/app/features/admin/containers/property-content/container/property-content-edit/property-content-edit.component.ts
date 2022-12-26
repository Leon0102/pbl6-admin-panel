import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService, PropertyManagementService } from '../../../../../../core/services';

@Component({
  selector: 'app-property-content-edit',
  templateUrl: './property-content-edit.component.html',
  styleUrls: ['./property-content-edit.component.scss']
})
export class PropertyContentEditComponent implements OnInit {
  $isLoading = true;
  propertyData!: any;

  facilitiesLength: number = 0;

  avgRating: any = 0;

  constructor(
    public dialog: MatDialog,
    public form: FormBuilder,
    private notificationService: NotificationService,

    public dialogRef: MatDialogRef<PropertyContentEditComponent>,
    private propertyManagementService: PropertyManagementService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    registerLocaleData(es);
    this.getPropertyDetail();
  }

  getPropertyDetail() {
    this.propertyManagementService.getPropertyById(this.data).subscribe(el => {
      if (el.data) {
        this.propertyData = el.data;
        this.$isLoading = false;
        this.avgRating = Math.round(Number(this.propertyData.avgRating) / 2);
        this.facilitiesLength = Object.keys(this.propertyData.facilities).length;
      }
    });
  }
  updateVerifiedStatus() {
    this.dialogRef.close(this.data);
  }
}
