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
  memberSince: Date;

  @IsBoolean()
  @IsNotEmpty()
  isAdm: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isMale: boolean;
}
