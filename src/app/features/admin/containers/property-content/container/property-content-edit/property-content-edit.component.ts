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

  rating: number = 0;

  constructor(
    public dialog: MatDialog,
    public form: FormBuilder,
    private notificationService: NotificationService,

    public dialogRef: MatDialogRef<PropertyContentEditComponent>,
    private propertyManagementService: PropertyManagementService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.getPropertyDetail();
  }

  getPropertyDetail() {
    this.propertyManagementService.getPropertyById(this.data).subscribe(el => {
      if (el.data) {
        this.propertyData = el.data;
        this.$isLoading = false;
        this.rating = Math.round(this.propertyData.rating / 2);
      }
    });
  }
  updateVerifiedStatus() {
    this.dialogRef.close(this.data);
  }
}
