import { IsOptional, IsString } from "class-validator";

export class UpdateAdminRequest {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  email: string;
}
