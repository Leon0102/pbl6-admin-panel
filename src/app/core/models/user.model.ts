export class UserProfileModel {
  email!: string;
  roleId!: string;

  public constructor(init?: Partial<UserProfileModel>) {
    Object.assign(this, init);
  }
}
