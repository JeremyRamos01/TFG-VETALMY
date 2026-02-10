import { IsInt, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateEnfermedadDto {
    @IsString()
    observaciones: string;

    @IsDateString()
    @IsOptional()
    fecha_alta?: string;

    @IsInt()
    historialId: number;

    @IsInt()
    @IsOptional()
    veterinarioId?: number;
}