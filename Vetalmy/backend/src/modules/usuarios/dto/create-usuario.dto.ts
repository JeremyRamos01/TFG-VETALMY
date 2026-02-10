import { IsEmail, IsString, MinLength, IsOptional, IsEnum } from 'class-validator';


export class CreateUsuarioDto {
    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    apellido1: string;

    @IsString()
    @IsOptional()
    apellido2?: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    contrasenia: string;

    @IsString()
    @IsOptional()
    rol?: string;
}