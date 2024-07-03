import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdatePostRequest {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  content: string;
}
