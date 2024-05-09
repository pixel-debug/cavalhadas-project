import { IsOptional, IsString } from "class-validator";

export class UpdatePostRequest {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  content: string;
}
