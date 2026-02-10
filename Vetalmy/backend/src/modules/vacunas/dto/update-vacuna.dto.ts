import { PartialType } from '@nestjs/mapped-types';
import { CreateVacunaDto } from './create-vacuna.dto';
import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateVacunaDto extends PartialType(CreateVacunaDto) {
    @IsString()
    nombre: string;

    @IsString()
    @IsOptional()
    descripción?: string;

    @IsString()
    @IsOptional()
    periodicidad?: string;

    @IsDateString()
    fecha_aplicacion: string;
}
