import { IsNotEmpty, IsNumber } from "class-validator";

export class DeletePostRequest {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
