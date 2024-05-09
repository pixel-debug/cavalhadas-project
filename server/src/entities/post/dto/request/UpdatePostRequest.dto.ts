import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatePostRequest {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsString()
  content: string;
}
