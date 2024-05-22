import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAdminRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  constructor() {
    (this.name = ""), (this.email = "");
  }
}
