import { IsBoolean, IsDate, IsOptional, IsString } from "class-validator";

export class UpdateMemberRequest {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  role: string;

  @IsDate()
  @IsOptional()
  memberSince: Date;

  @IsBoolean()
  @IsOptional()
  isAdm: boolean;

  @IsBoolean()
  @IsOptional()
  isMale: boolean;
}
