import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateChatDto {
    @IsInt()
    clienteId: number;

    @IsInt()
    veterinarioId: number;

    @IsString()
    @IsOptional()
    estado?: string;
}