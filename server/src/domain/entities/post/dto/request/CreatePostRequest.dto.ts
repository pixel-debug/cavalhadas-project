import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreatePostRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  constructor(obj: CreatePostRequest) {
    Object.assign(this, obj);
  }
}
