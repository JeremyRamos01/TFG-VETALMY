import { IsString, IsInt, IsDateString, IsOptional } from 'class-validator';

export class CreateCitaDto {
    @IsDateString()
    fecha: string;

    @IsString()
    @IsOptional()
    tipo?: string;

    @IsString()
    motivo: string;

    @IsInt()
    mascotaId: number;

    @IsInt()
    clienteId: number;
}