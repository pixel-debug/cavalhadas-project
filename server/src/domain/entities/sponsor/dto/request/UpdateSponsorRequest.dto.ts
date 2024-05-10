import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateSponsorRequest {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsNumber()
  @IsOptional()
  sponsorship: number;
}
