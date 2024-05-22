import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  authorId: number;

  @IsString()
  @IsNotEmpty()
  content: string;

  constructor() {
    this.title = "";
    this.image = "";
    this.authorId = 0;
    this.content = "";
  }
}
