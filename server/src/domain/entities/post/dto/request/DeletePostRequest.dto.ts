import { IsNumber, IsNotEmpty } from "class-validator";

export class DeletePostRequest {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
