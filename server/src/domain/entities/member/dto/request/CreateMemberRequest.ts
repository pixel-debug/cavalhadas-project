import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateMemberRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  memberSince: Date;

  @IsBoolean()
  @IsNotEmpty()
  isAdm: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isMale: boolean;

  constructor() {
    this.name = "";
    this.role = "";
    this.image = "";
    this.memberSince = new Date();
    this.isAdm = false;
    this.isMale = true;
  }
}
