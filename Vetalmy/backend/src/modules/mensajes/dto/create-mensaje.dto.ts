import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class CreateMensajeDto {
    @IsString()
    @IsNotEmpty()
    mensaje: string;

    @IsInt()
    chatId: number;

    @IsInt()
    usuarioId: number;
}