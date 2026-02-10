import { PartialType } from '@nestjs/mapped-types';
import { CreateCitaDto } from './create-cita.dto';
import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateCitaDto extends PartialType(CreateCitaDto) {
    @IsNumber()
    id: number; // El id de la cita que se va a actualizar

    @IsString()
    @IsOptional()
    tipo?: string;

    @IsString()
    motivo: string;

    @IsNumber()
    mascotaId: number;

    @IsNumber()
    clienteId: number;

    @IsNumber()
    veterinarioId: number;

}
