import { IsNotEmpty, IsNumber } from "class-validator";

export class DeleteSponsorRequest {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
