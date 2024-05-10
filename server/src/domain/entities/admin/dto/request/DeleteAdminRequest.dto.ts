import { IsNotEmpty, IsNumber } from "class-validator";

export class DeleteAdminRequest {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
