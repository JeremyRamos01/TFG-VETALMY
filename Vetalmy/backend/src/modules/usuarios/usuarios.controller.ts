import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) { }

    @Post()
    create(@Body() body: CreateUsuarioDto) {
        return this.usuariosService.create(body);
    }

    @Get()
    obtenerTodos() {
        return this.usuariosService.findAll();
    }
}