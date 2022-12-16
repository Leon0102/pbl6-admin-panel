
export class UserInfoModel {
  id!: string;
  email!: string;
  createdAt!: string;

  phone!: string;
  name!: string;
  roleId!: string;
  public constructor(init?: Partial<UserInfoModel>) {
    Object.assign(this, init);
  }
}
