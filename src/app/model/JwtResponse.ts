export class JwtResponse {
  constructor(
    public tokenType?: string,
    public accessToken?: string
  ) {
  }
}
