import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateHistorialDto {
    @IsString()
    @IsOptional()
    observaciones?: string;

    @IsInt()
    mascotaId: number;
}