import { IsArray, IsOptional, IsString } from "class-validator";
import { PDFDto } from "../../../pdf/dto/PDF.dto";

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

  @IsArray()
  @IsString()
  @IsOptional()
  pdf: PDFDto[];
}
