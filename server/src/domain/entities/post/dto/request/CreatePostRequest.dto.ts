import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { PDFDto } from "../../../pdf/dto/PDF.dto";

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

  @IsArray()
  @IsString()
  @IsOptional()
  pdf: PDFDto[];

  constructor() {
    this.title = "";
    this.image = "";
    this.authorId = 0;
    this.content = "";
    this.pdf = [];
  }
}
