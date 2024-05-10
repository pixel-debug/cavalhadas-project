import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { AdminResponse } from "../../../admin/dto/AdminResponse.dto";

export class CreatePostRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  authorId: number;

  @IsString()
  @IsNotEmpty()
  content: string;

  constructor(obj: CreatePostRequest) {
    Object.assign(this, obj);
  }
}
