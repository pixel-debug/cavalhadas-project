import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { CreateDocumentRequest } from "../../../document/dto/CreateDocument.dto";

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
  @IsOptional()
  pdfs?: CreateDocumentRequest[];

  constructor() {
    this.title = "";
    this.content = "";
    this.image = "";
    this.authorId = 0;
    this.pdfs = [];
  }
}
