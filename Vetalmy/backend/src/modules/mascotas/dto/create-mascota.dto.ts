import { IsString, IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateMascotaDto {
    @IsString()
    nombre: string;

    @IsString()
    animal: string;

    @IsString()
    @IsOptional()
    raza?: string;

    @IsInt()
    @IsOptional()
    edad?: number;

    @IsNumber()
    @IsOptional()
    peso?: number;

    @IsInt()
    usuarioId: number;
}
