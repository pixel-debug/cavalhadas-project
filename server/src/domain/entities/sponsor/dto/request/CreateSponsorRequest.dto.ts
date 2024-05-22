import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSponsorRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  sponsorship: number;

  constructor() {
    (this.name = ""), (this.image = ""), (this.sponsorship = 0);
  }
}
