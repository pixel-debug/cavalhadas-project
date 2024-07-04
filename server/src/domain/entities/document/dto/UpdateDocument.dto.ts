import { IsString, IsInt, IsOptional } from "class-validator";

export class UpdateDocumentRequest {
  @IsString()
  @IsOptional()
  fileName?: string;

  @IsString()
  @IsOptional()
  downloadPath?: string;

  @IsInt()
  @IsOptional()
  postId?: number;
}
