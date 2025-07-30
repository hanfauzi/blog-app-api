import { IsOptional, IsString } from "class-validator";
import { PagiationQueryParams } from "../../pagination/dto/pagination.dto";

export class GetBlogsDTO extends PagiationQueryParams {
  @IsOptional()
  @IsString()
  search?: string;
}
