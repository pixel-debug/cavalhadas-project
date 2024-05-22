import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAdminRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  trinco: string;

  constructor() {
    (this.name = ""), (this.email = "");
  }
}
