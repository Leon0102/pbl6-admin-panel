export class TokenModel {

  accessToken!: string;
  refreshToken!: string;

  public constructor(init?: Partial<TokenModel>) {
    Object.assign(this, init);
  }
}
