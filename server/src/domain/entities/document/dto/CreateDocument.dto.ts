import { IsString, IsNotEmpty } from "class-validator";

export class CreateDocumentRequest {
  @IsString()
  @IsNotEmpty()
  fileName: string;

  @IsString()
  @IsNotEmpty()
  downloadPath: string;

  constructor(fileName: string, downloadPath: string) {
    this.fileName = fileName;
    this.downloadPath = downloadPath;
  }
}
