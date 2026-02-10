import { PartialType } from '@nestjs/mapped-types';
import { CreateMascotaDto } from './create-mascota.dto';
import { IsOptional } from 'class-validator';


export class UpdateMascotaDto extends PartialType(CreateMascotaDto) {
    @IsOptional()
    nombre?: string;

    @IsOptional()
    animal?: string;

    @IsOptional()
    raza?: string;

    @IsOptional()
    edad?: number;

    @IsOptional()
    peso?: number;
}
