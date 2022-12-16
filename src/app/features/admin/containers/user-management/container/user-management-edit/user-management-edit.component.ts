import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserInfoModel } from '../../../../../../core/models/user-info.model';
import { NotificationService, UserManagementService } from '../../../../../../core/services';
@Component({
  selector: 'mp-user-management-edit',
  templateUrl: './user-management-edit.component.html',
  styleUrls: ['./user-management-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserManagementEditComponent implements OnInit {

  $isLoading = true;
  userData: UserInfoModel = {
    id: '',
    email: '',
    createdAt: '',
    phone: '',
    name: '',
    roleId: '',
  };

  selectedRole!: string;

  roles = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'host', viewValue: 'Host' },
    { value: 'guest', viewValue: 'Guest' }
  ];

  userForm!: FormGroup;

  constructor(
    public dialog: MatDialog,
    public form: FormBuilder,
    private notificationService: NotificationService,

    public dialogRef: MatDialogRef<UserManagementEditComponent>,
    private userManagementService: UserManagementService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }
  ngOnInit(): void {
    this.getUserDetail();
  }


  getUserDetail() {
    this.userManagementService.getUserById(this.data).subscribe(el => {
      if (el.data) {
        this.userData = el.data;
        this.userForm = this.form.group({
          name: [this.userData.name, [Validators.required]],
          email: [this.userData.email, [Validators.required, Validators.email]],
          phone: [this.userData.phone, [Validators.required]],
          roleId: [this.userData.roleId, [Validators.required]],
        });
        this.selectedRole = this.userData.roleId;
        this.$isLoading = false;
      }
    });
  }

  saveUser() {
    this.$isLoading = true;
    const data = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
    };
    console.log(data);
    this.userManagementService.updateUser(this.userData.id, data).subscribe(el => {
      if (el.data) {
        this.notificationService.success('User updated successfully');
        this.$isLoading = false;
      }
    });
    this.dialogRef.close();
  }
}
