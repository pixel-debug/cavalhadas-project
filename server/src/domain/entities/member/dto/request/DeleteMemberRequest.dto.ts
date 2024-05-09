import { IsNotEmpty, IsNumber } from "class-validator";

export class DeleteMemberRequest {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
